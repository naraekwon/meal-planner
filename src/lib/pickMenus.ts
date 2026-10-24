import type { FamilyRating, Menu } from '../types';

/** Mild preference: a 5-star is only a bit more likely than a 1-star. */
const PREFERENCE_WEIGHT: Record<FamilyRating, number> = {
  1: 3,
  2: 4,
  3: 5,
  4: 6,
  5: 7,
};

/** Share of picks drawn evenly, so lower-rated menus still appear. */
const EXPLORE_CHANCE = 0.4;

function pickIndex(remaining: Menu[], explore: boolean): number {
  if (explore || remaining.length === 1) {
    return Math.floor(Math.random() * remaining.length);
  }

  const totalWeight = remaining.reduce((sum, menu) => sum + PREFERENCE_WEIGHT[menu.familyRating], 0);
  let ticket = Math.random() * totalWeight;
  let index = remaining.length - 1;

  for (let j = 0; j < remaining.length; j += 1) {
    ticket -= PREFERENCE_WEIGHT[remaining[j].familyRating];
    if (ticket <= 0) {
      return j;
    }
  }

  return index;
}

/** Sample without replacement. Favorites are a bit more likely; ~40% of picks are even. */
export function pickMenus(pool: Menu[], count: number): Menu[] {
  if (count <= 0 || pool.length === 0) return [];

  const remaining = [...pool];
  const picked: Menu[] = [];
  const take = Math.min(count, remaining.length);

  for (let i = 0; i < take; i += 1) {
    const index = pickIndex(remaining, Math.random() < EXPLORE_CHANCE);
    const [chosen] = remaining.splice(index, 1);
    picked.push(chosen);
  }

  return picked;
}
