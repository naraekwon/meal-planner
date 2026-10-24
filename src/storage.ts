import { seedMenus } from './data/seedMenus';
import type { FamilyRating, MealType, Menu } from './types';
import { MEAL_TYPES } from './types';

const STORAGE_KEY = 'meal-planner-menus';

function isMealType(value: unknown): value is MealType {
  return typeof value === 'string' && (MEAL_TYPES as string[]).includes(value);
}

function isFamilyRating(value: unknown): value is FamilyRating {
  return value === 1 || value === 2 || value === 3 || value === 4 || value === 5;
}

function isMenu(value: unknown): value is Menu {
  if (!value || typeof value !== 'object') return false;
  const menu = value as Partial<Menu>;
  return (
    typeof menu.id === 'string' &&
    typeof menu.name === 'string' &&
    Array.isArray(menu.mealTypes) &&
    menu.mealTypes.every(isMealType) &&
    menu.mealTypes.length > 0 &&
    isFamilyRating(menu.familyRating)
  );
}

export function loadMenus(): Menu[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedMenus;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0 || !parsed.every(isMenu)) {
      return seedMenus;
    }
    return parsed;
  } catch {
    return seedMenus;
  }
}

export function saveMenus(menus: Menu[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(menus));
}
