# Narae's Meal Planner

A daily meal planner. Keep a list of menus, mark what the family likes, and generate a random plan from how many breakfasts, lunches, dinners, and snacks you need.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

To build a production copy:

```bash
npm run build
npm run preview
```

## GitHub Pages

The live site is [https://naraekwon.github.io/meal-planner/](https://naraekwon.github.io/meal-planner/).

Pushes to `master` build the site and publish it to the `gh-pages` branch.

One-time setup in the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `gh-pages` / `/ (root)` → Save**.

If this is still set to `master`, the site stays blank because GitHub is serving the Vite source file instead of the build.

## How to use it

1. Enter how many of each meal you need.
2. Click **Generate plan**. Favorites show up a bit more often, but lower-rated menus still get mixed in.
3. Click **Print plan** (or use the browser print dialog) to print only the plan.
4. In the menu library, add, edit, or delete menus. Tag each one as breakfast, lunch, dinner, and/or snack.
5. Click the stars on a menu to save a family preference (1 = dislike, 5 = favorite).

Menus are stored in this browser's local storage. Clearing site data will reset you to the starter list.

## Next

A shopping list built from the generated plan.
