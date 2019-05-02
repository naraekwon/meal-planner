// let mealAmount = document.querySelector('#mealAmount');
// let table = document.querySelector('#mealPlanCanvas');
// let breakfast = document.querySelector('#inputBreakfast');
// let lunch = document.querySelector('#inputLunch');
// let dinner = document.querySelector('#inputDinner');
// let snack = document.querySelector('#inputSnack');
// let breakfastMenus = ['pancake', 'cereal', 'zucchini bread', 'waffle', 'anchovy rice ball', 'banana bread', 'croissant'];
// let lunchMenus = ['spicy pork', 'Don Katsu', 'Meatball Pasta', 'Mac and Cheese', 'Teriyaki Chicken', 'LA Kalbi', 'Kimchi Fried Rice'];

// //when amount of meals is submitted by the user, call plan()
// mealAmount.addEventListener('submit', function(e) {
// 	e.preventDefault();
// 	console.log('submitting');
// 	plan(breakfast.value, lunch.value, dinner.value, snack.value);
// });

// //Select random menu from its category - breakfast, lunch, dinner, snack.
// function random_menu(items) {
// 	return items[Math.floor(Math.random()*items.length)];
// }


// function plan(){
// 	let iterable = [[breakfast.value, breakfastMenus], [lunch.value, lunchMenus], [dinner.value, 'dinner'], [snack.value, 'snack']];
	
// 	//remove existing table using while loop
// 	while (table.firstElementChild !== null){
// 		table.firstElementChild.remove();
// 		console.log('deleting');
// 	}

// 	//create a new weekly plan
// 	for (let entry of iterable) {
// 		console.log('1');
// 		for (let i = 1; i <= entry[0]; i ++){
// 			if (i == 1) {
// 				newTableRow = document.createElement('tr');
// 			};
// 			newList = document.createElement('ul');
// 			newList.innerHTML = random_menu(entry[1]);
// 			newTableRow.appendChild(newList);
// 			if (i == entry[0]) {
// 				table.appendChild(newTableRow);
// 			};
// 		};
// 	}
// }





var model = {
	breakfastMenus: [
		{
			name: 'pancake',
			mainIngredient: 'pancake',
			ingredient: ['a','b', 'c'],
			prep: ['make the batter for the next day morning'],
			cookingDirection: ['1. grease and heat the pan.']
		},
	],

	lunchMenus: [
		{	
			name: 'Spicy Pork (제육볶음)',
			mainIngredient: 'pork',
			ingredient: ['sliced pork', 'carrot', 'onion'],
			prep: ['make a sauce', 'slice the pork', 'marinate the pork'],
			cookingDirection: ['1. heat the pan with cooking oil', '2. add carrot and onion and pork in order']
		},
		{
			name: 'Don Katsu',
			mainIngredient: 'pork',
			ingredient: ['pork top loin', 'cabbage', 'katsu sauce', 'panko', 'egg'],
			prep: ['밀달빵'],
			cookingDirection: ['bake the katsu in the 400 F preheated oven for about 18 mins']
		},
		{
			name: 'Meatball Pasta',
			mainIngredient: 'meatball',
			ingredient: ['meatball', 'pasta', 'marinara sauce'],
			prep: ['meatball'],
			cookingDirection: ['put all the ingredients into instantpot and cook it in low pressure for 15 mins.'],
		},
	]

};

var controller = {
	init: function(){
		//tell our views to initalize
		weeklyPlanView.init();
	},

	getLunchMenus: function() {
		return model.lunchMenus;
	}
};

var weeklyPlanView = {
	init: function(){
		mealAmount.addEventListener('submit', function(e) {
			e.preventDefault();
			console.log('submitting');
			weeklyPlanView.render();
		});
		
	},

	render: function(){
		let mealAmount = document.querySelector('#mealAmount');
		let table = document.querySelector('#mealPlanCanvas');
		let lunch = document.querySelector('#inputLunch');
		var lunchMenus = controller.getLunchMenus();
		console.log('rendering');
		//create lunch menu plan on the screen
		for (let i = 0; i < lunch.value; i ++) {
			newTableRow = document.createElement('tr');
			newList = document.createElement('ul');
			newList.innerHTML = lunchMenus[i].name;
			newTableRow.appendChild(newList);
			table.appendChild(newTableRow);
		};
	}
	
};

controller.init();
