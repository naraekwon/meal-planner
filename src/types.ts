export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';
export type FamilyRating = 1 | 2 | 3 | 4 | 5;

export interface Menu {
  id: string;
  name: string;
  mealTypes: MealType[];
  familyRating: FamilyRating;
}

export const MEAL_TYPES: MealType[] = ['breakfast', 'lunch', 'dinner', 'snack'];

export const MEAL_LABELS: Record<MealType, string> = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner',
  snack: 'Snack',
};

export type MealCounts = Record<MealType, number>;
export type PlanIds = Record<MealType, string[]>;
