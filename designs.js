let mealAmount = document.querySelector('#mealAmount');
let table = document.querySelector('#mealPlanCanvas');
let breakfast = document.querySelector('#inputBreakfast');
let lunch = document.querySelector('#inputLunch');
let dinner = document.querySelector('#inputDinner');
let snack = document.querySelector('#inputSnack');
let breakfastMenus = ['pancake', 'cereal', 'zucchini bread', 'waffle', 'anchoby rice ball', 'banana bread', 'croissant'];
let lunchMenus = ['spicy pork', 'Don Katsu', 'Meatball Pasta', 'Mac and Cheese', 'Teriyaki Chicken', 'LA Kalbi', 'Kimchi Fried Rice'];

//when amount of meals is submitted by the user, call plan()
mealAmount.addEventListener('submit', function(e) {
	e.preventDefault();
	console.log('submitting');
	plan(breakfast.value, lunch.value, dinner.value, snack.value);
});

//Select random menu from its category - breakfast, lunch, dinner, snack.
function random_menu(items) {
	return items[Math.floor(Math.random()*items.length)];
}


function plan(b, l, d, s){
	let iterable = new Map([[breakfast.value, breakfastMenus], [lunch.value, lunchMenus], [dinner.value, 'dinner'], [snack.value, 'snack']]);
	
	//remove existing table using while loop
	while (table.firstElementChild !== null){
		table.firstElementChild.remove();
		console.log('deleting');
	}

	//create a new weekly plan
	for (let entry of iterable) {
		newTableRow = document.createElement('tr');
		for (let i = 1; i <= entry[0]; i ++){
			newList = document.createElement('ul');
			newList.innerHTML = random_menu(entry[1]);
			newTableRow.appendChild(newList);
			if (i == entry[0]) {
				table.appendChild(newTableRow);
			};
		};
	}
}





// var model = {
// 	menus: [
// 		{	
// 			category: ['lunch', 'dinner'],
// 			name: 'Spicy Pork (제육볶음)',
// 			mainIngredient: 'pork',
// 			ingredient: ['sliced pork', 'carrot', 'onion'],
// 			prep: ['make a sauce', 'slice the pork', 'marinate the pork'],
// 			cookingDirection: ['1. heat the pan with cooking oil', '2. add carrot and onion and pork in order']
// 		},
// 		{
// 			category: ['lunch', 'dinner'],
// 			name: 'Don Katsu',
// 			mainIngredient: 'pork',
// 			ingredient: ['pork top loin', 'cabbage', 'katsu sauce', 'panko', 'egg'],
// 			prep: ['밀달빵'],
// 			cookingDirection: ['bake the katsu in the 400 F preheated oven for about 18 mins']
// 		},
// 		{
// 			category: ['lunch', 'dinner'],
// 			name: 'Meatball Pasta',
// 			mainIngredient: 'meatball',
// 			ingredient: ['meatball', 'pasta', 'marinara sauce'],
// 			prep: ['meatball'],
// 			cookingDirection: ['put all the ingredients into instantpot and cook it in low pressure for 15 mins.'],
// 		},

// 	]

// }

// var octopus = {
// 	init: function() {

// 	},

// 	getWeeklyPlan: function() {

// 	}


// }

// var weeklyPlanVew = {
	

// }

// var shopingListView = {
	

// }

// var prepListView = {
	

// }

// var cookingDirectionView = {
	


// }