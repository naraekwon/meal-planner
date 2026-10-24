import { MEAL_LABELS, MEAL_TYPES } from '../types';
import type { FamilyRating, MealCounts, MealType, Menu, PlanIds } from '../types';
import { MenuCard } from './MenuCard';

interface PlannerProps {
  menusById: Map<string, Menu>;
  counts: MealCounts;
  plan: PlanIds | null;
  notes: Partial<Record<MealType, string>>;
  onCountChange: (type: MealType, value: number) => void;
  onGenerate: () => void;
  onRate: (id: string, rating: FamilyRating) => void;
}

export function Planner({
  menusById,
  counts,
  plan,
  notes,
  onCountChange,
  onGenerate,
  onRate,
}: PlannerProps) {
  return (
    <section className="plan-panel">
      <header className="panel-header">
        <div>
          <h2>This week’s plan</h2>
          <p className="no-print">
            How many of each meal do you need? Favorites show up a bit more often, and lower-rated menus
            still get a turn.
          </p>
        </div>
        {plan ? (
          <button type="button" className="btn btn-ghost no-print" onClick={() => window.print()}>
            Print plan
          </button>
        ) : null}
      </header>

      <form
        className="count-form no-print"
        onSubmit={(event) => {
          event.preventDefault();
          onGenerate();
        }}
      >
        <div className="count-grid">
          {MEAL_TYPES.map((type) => (
            <label key={type} className="count-field">
              <span>{MEAL_LABELS[type]}</span>
              <input
                type="number"
                min={0}
                inputMode="numeric"
                value={counts[type]}
                onChange={(event) => onCountChange(type, Math.max(0, Number(event.target.value) || 0))}
              />
            </label>
          ))}
        </div>
        <button type="submit" className="btn btn-primary">
          Generate plan
        </button>
      </form>

      {plan ? (
        <div className="plan-results">
          {MEAL_TYPES.map((type) => {
            const menus = plan[type]
              .map((id) => menusById.get(id))
              .filter((menu): menu is Menu => Boolean(menu));

            return (
              <section key={type} className="plan-group">
                <h3>
                  {MEAL_LABELS[type]}
                  <span className="plan-count no-print">{menus.length}</span>
                </h3>
                {notes[type] ? <p className="plan-note">{notes[type]}</p> : null}
                {menus.length === 0 ? (
                  <p className="empty-copy">Nothing picked for {MEAL_LABELS[type].toLowerCase()}.</p>
                ) : (
                  <div className="plan-stack">
                    {menus.map((menu) => (
                      <MenuCard key={menu.id} menu={menu} onRate={(rating) => onRate(menu.id, rating)} />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      ) : (
        <p className="empty-copy plan-placeholder">
          Set your counts and generate a random plan. Favorites show up a bit more often, and lower-rated
          menus still get a turn.
        </p>
      )}
    </section>
  );
}
