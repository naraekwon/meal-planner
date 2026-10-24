import { useState, type FormEvent, type MouseEvent } from 'react';
import { MEAL_LABELS, MEAL_TYPES } from '../types';
import type { FamilyRating, MealType, Menu } from '../types';
import { StarRating } from './StarRating';

interface MenuFormProps {
  menu?: Menu;
  onSave: (input: { name: string; mealTypes: MealType[]; familyRating: FamilyRating }) => void;
  onClose: () => void;
}

export function MenuForm({ menu, onSave, onClose }: MenuFormProps) {
  const [name, setName] = useState(menu?.name ?? '');
  const [mealTypes, setMealTypes] = useState<MealType[]>(menu?.mealTypes ?? []);
  const [familyRating, setFamilyRating] = useState<FamilyRating>(menu?.familyRating ?? 3);
  const [error, setError] = useState('');

  function toggleMealType(type: MealType) {
    setMealTypes((current) =>
      current.includes(type) ? current.filter((item) => item !== type) : [...current, type],
    );
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('Give this menu a name.');
      return;
    }
    if (mealTypes.length === 0) {
      setError('Pick at least one meal type.');
      return;
    }
    onSave({ name: trimmed, mealTypes, familyRating });
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-form-title"
        onClick={(event: MouseEvent) => event.stopPropagation()}
      >
        <h2 id="menu-form-title">{menu ? 'Edit menu' : 'Add menu'}</h2>
        <form className="menu-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="e.g. Teriyaki chicken"
              autoFocus
            />
          </label>

          <fieldset className="field">
            <legend>Fits for</legend>
            <div className="checkbox-row">
              {MEAL_TYPES.map((type) => (
                <label key={type} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={mealTypes.includes(type)}
                    onChange={() => toggleMealType(type)}
                  />
                  {MEAL_LABELS[type]}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="field">
            <span>Family preference</span>
            <StarRating value={familyRating} onChange={setFamilyRating} />
          </div>

          {error ? <p className="form-error">{error}</p> : null}

          <div className="modal-actions">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
