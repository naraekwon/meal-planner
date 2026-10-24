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

Pushes to `master` run GitHub Actions, which builds `dist/` and deploys it to Pages. There is no `gh-pages` publish step.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

If Source is still “Deploy from a branch,” GitHub may serve `master` or an old `gh-pages` copy instead of this workflow. After Actions is the source, you can delete the `gh-pages` branch.

## How to use it

1. Enter how many of each meal you need.
2. Click **Generate plan**. Favorites show up a bit more often, but lower-rated menus still get mixed in.
3. Click **Print plan** (or use the browser print dialog) to print only the plan.
4. In the menu library, add, edit, or delete menus. Tag each one as breakfast, lunch, dinner, and/or snack.
5. Click the stars on a menu to save a family preference (1 = dislike, 5 = favorite).

Menus are stored in this browser's local storage. Clearing site data will reset you to the starter list.

## Next

A shopping list built from the generated plan.
