import type { FamilyRating } from '../types';

interface StarRatingProps {
  value: FamilyRating;
  onChange?: (rating: FamilyRating) => void;
  size?: 'sm' | 'md';
  readOnly?: boolean;
}

const RATINGS: FamilyRating[] = [1, 2, 3, 4, 5];

export function StarRating({ value, onChange, size = 'md', readOnly = false }: StarRatingProps) {
  const interactive = Boolean(onChange) && !readOnly;

  return (
    <div
      className={`star-rating star-rating-${size}`}
      role={interactive ? 'radiogroup' : 'img'}
      aria-label={`Family preference: ${value} out of 5 stars`}
    >
      {RATINGS.map((rating) => {
        const filled = rating <= value;
        if (!interactive) {
          return (
            <span key={rating} className={`star ${filled ? 'is-filled' : ''}`} aria-hidden="true">
              ★
            </span>
          );
        }

        return (
          <button
            key={rating}
            type="button"
            className={`star ${filled ? 'is-filled' : ''}`}
            role="radio"
            aria-checked={value === rating}
            aria-label={`${rating} star${rating === 1 ? '' : 's'}`}
            onClick={() => onChange?.(rating)}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}
