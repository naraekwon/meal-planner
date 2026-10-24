import { MEAL_LABELS, MEAL_TYPES } from '../types';
import type { FamilyRating, MealType, Menu } from '../types';
import { MenuCard } from './MenuCard';

type SortKey = 'name' | 'rating';

interface MenuLibraryProps {
  menus: Menu[];
  search: string;
  filters: MealType[];
  sort: SortKey;
  onSearchChange: (value: string) => void;
  onToggleFilter: (type: MealType) => void;
  onSortChange: (sort: SortKey) => void;
  onAdd: () => void;
  onEdit: (menu: Menu) => void;
  onDelete: (menu: Menu) => void;
  onRate: (id: string, rating: FamilyRating) => void;
}

export function MenuLibrary({
  menus,
  search,
  filters,
  sort,
  onSearchChange,
  onToggleFilter,
  onSortChange,
  onAdd,
  onEdit,
  onDelete,
  onRate,
}: MenuLibraryProps) {
  return (
    <section className="library-panel">
      <header className="panel-header library-header">
        <div>
          <h2>Menu library</h2>
          <p>
            {menus.length} menu{menus.length === 1 ? '' : 's'} in this view
          </p>
        </div>
        <button type="button" className="btn btn-primary" onClick={onAdd}>
          Add menu
        </button>
      </header>

      <div className="library-toolbar">
        <div className="toolbar-row">
          <label className="search-field">
            <span className="visually-hidden">Search menus</span>
            <input
              type="search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search menus"
            />
          </label>
          <label className="sort-field">
            <span>Sort by</span>
            <select value={sort} onChange={(event) => onSortChange(event.target.value as SortKey)}>
              <option value="name">Name</option>
              <option value="rating">Rating</option>
            </select>
          </label>
        </div>
        <div className="filter-row" role="group" aria-label="Filter by meal type">
          {MEAL_TYPES.map((type) => {
            const active = filters.includes(type);
            return (
              <button
                key={type}
                type="button"
                className={`chip-btn chip-${type} ${active ? 'is-active' : ''}`}
                aria-pressed={active}
                onClick={() => onToggleFilter(type)}
              >
                {MEAL_LABELS[type]}
              </button>
            );
          })}
        </div>
      </div>

      {menus.length === 0 ? (
        <p className="empty-copy">No menus match those filters. Try clearing search or meal chips.</p>
      ) : (
        <div className="menu-grid">
          {menus.map((menu) => (
            <MenuCard
              key={menu.id}
              menu={menu}
              onRate={(rating) => onRate(menu.id, rating)}
              onEdit={() => onEdit(menu)}
              onDelete={() => onDelete(menu)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
