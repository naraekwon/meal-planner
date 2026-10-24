import { MEAL_LABELS } from '../types';
import type { FamilyRating, Menu } from '../types';
import { StarRating } from './StarRating';

interface MenuCardProps {
  menu: Menu;
  onRate: (rating: FamilyRating) => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function MenuCard({ menu, onRate, onEdit, onDelete }: MenuCardProps) {
  return (
    <article className="menu-card">
      <h3 className="menu-card-name">{menu.name}</h3>
      <ul className="chip-row no-print">
        {menu.mealTypes.map((type) => (
          <li key={type} className={`chip chip-${type}`}>
            {MEAL_LABELS[type]}
          </li>
        ))}
      </ul>
      <div className="menu-card-footer no-print">
        <StarRating value={menu.familyRating} onChange={onRate} />
        {onEdit || onDelete ? (
          <div className="menu-card-actions">
            {onEdit ? (
              <button type="button" className="text-btn" onClick={onEdit}>
                Edit
              </button>
            ) : null}
            {onDelete ? (
              <button type="button" className="text-btn text-btn-danger" onClick={onDelete}>
                Delete
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
