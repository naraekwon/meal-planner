import { useEffect, useMemo, useState } from 'react';
import { MenuForm } from './components/MenuForm';
import { MenuLibrary } from './components/MenuLibrary';
import { Planner } from './components/Planner';
import { pickMenus } from './lib/pickMenus';
import { loadMenus, saveMenus } from './storage';
import { MEAL_LABELS, MEAL_TYPES } from './types';
import type { FamilyRating, MealCounts, MealType, Menu, PlanIds } from './types';

type SortKey = 'name' | 'rating';
type FormState = { mode: 'create' } | { mode: 'edit'; menu: Menu };

const EMPTY_COUNTS: MealCounts = {
  breakfast: 3,
  lunch: 3,
  dinner: 3,
  snack: 2,
};

const EMPTY_PLAN: PlanIds = {
  breakfast: [],
  lunch: [],
  dinner: [],
  snack: [],
};

export default function App() {
  const [menus, setMenus] = useState<Menu[]>(() => loadMenus());
  const [counts, setCounts] = useState<MealCounts>(EMPTY_COUNTS);
  const [plan, setPlan] = useState<PlanIds | null>(null);
  const [notes, setNotes] = useState<Partial<Record<MealType, string>>>({});
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<MealType[]>([]);
  const [sort, setSort] = useState<SortKey>('name');
  const [form, setForm] = useState<FormState | null>(null);

  useEffect(() => {
    saveMenus(menus);
  }, [menus]);

  const menusById = useMemo(() => new Map(menus.map((menu) => [menu.id, menu])), [menus]);

  const visibleMenus = useMemo(() => {
    const query = search.trim().toLowerCase();
    return menus
      .filter((menu) => {
        const matchesSearch = query.length === 0 || menu.name.toLowerCase().includes(query);
        const matchesFilter =
          filters.length === 0 || filters.some((type) => menu.mealTypes.includes(type));
        return matchesSearch && matchesFilter;
      })
      .sort((a, b) => {
        if (sort === 'rating') {
          if (b.familyRating !== a.familyRating) return b.familyRating - a.familyRating;
        }
        return a.name.localeCompare(b.name);
      });
  }, [filters, menus, search, sort]);

  function updateCount(type: MealType, value: number) {
    setCounts((current) => ({ ...current, [type]: value }));
  }

  function generatePlan() {
    const nextPlan: PlanIds = { ...EMPTY_PLAN };
    const nextNotes: Partial<Record<MealType, string>> = {};

    for (const type of MEAL_TYPES) {
      const pool = menus.filter((menu) => menu.mealTypes.includes(type));
      const requested = counts[type];
      nextPlan[type] = pickMenus(pool, requested).map((menu) => menu.id);
      if (requested > pool.length) {
        nextNotes[type] =
          pool.length === 0
            ? `No ${MEAL_LABELS[type].toLowerCase()} menus yet.`
            : `Only ${pool.length} ${MEAL_LABELS[type].toLowerCase()} menu${pool.length === 1 ? '' : 's'} available.`;
      }
    }

    setPlan(nextPlan);
    setNotes(nextNotes);
  }

  function rateMenu(id: string, familyRating: FamilyRating) {
    setMenus((current) => current.map((menu) => (menu.id === id ? { ...menu, familyRating } : menu)));
  }

  function toggleFilter(type: MealType) {
    setFilters((current) =>
      current.includes(type) ? current.filter((item) => item !== type) : [...current, type],
    );
  }

  function saveMenu(input: { name: string; mealTypes: MealType[]; familyRating: FamilyRating }) {
    if (form?.mode === 'edit') {
      const id = form.menu.id;
      setMenus((current) => current.map((menu) => (menu.id === id ? { ...menu, ...input } : menu)));
    } else {
      const menu: Menu = {
        id: crypto.randomUUID(),
        ...input,
      };
      setMenus((current) => [...current, menu]);
    }
    setForm(null);
  }

  function deleteMenu(menu: Menu) {
    const confirmed = window.confirm(`Delete “${menu.name}”?`);
    if (!confirmed) return;
    setMenus((current) => current.filter((item) => item.id !== menu.id));
    setPlan((current) => {
      if (!current) return current;
      const next = { ...current };
      for (const type of MEAL_TYPES) {
        next[type] = current[type].filter((id) => id !== menu.id);
      }
      return next;
    });
  }

  return (
    <div className="app">
      <header className="app-header">
        <p className="eyebrow">Daily meals</p>
        <h1>Narae’s Meal Planner</h1>
        <p className="lede">
          Keep a living menu list, mark what the family likes, and roll a random plan when you need one.
        </p>
      </header>

      <div className="app-shell">
        <Planner
          menusById={menusById}
          counts={counts}
          plan={plan}
          notes={notes}
          onCountChange={updateCount}
          onGenerate={generatePlan}
          onRate={rateMenu}
        />
        <MenuLibrary
          menus={visibleMenus}
          search={search}
          filters={filters}
          sort={sort}
          onSearchChange={setSearch}
          onToggleFilter={toggleFilter}
          onSortChange={setSort}
          onAdd={() => setForm({ mode: 'create' })}
          onEdit={(menu) => setForm({ mode: 'edit', menu })}
          onDelete={deleteMenu}
          onRate={rateMenu}
        />
      </div>

      {form ? (
        <MenuForm
          menu={form.mode === 'edit' ? form.menu : undefined}
          onSave={saveMenu}
          onClose={() => setForm(null)}
        />
      ) : null}
    </div>
  );
}
