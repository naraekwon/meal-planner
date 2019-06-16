var model = {
	breakfastMenus: [
		{
			name: 'Pancake w/ maple syrup, scrambled egg',
			mainIngredient: 'pancake',
			ingredient: ['a','b', 'c'],
			prep: ['Make the batter a night before.', 'Cut up fruits.'],
			cookingDirection: ['1. Grease and heat the pan.']
		},
		{
			name: 'Zucchini Bread w/ boiled/fried/scrambled egg',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make the mini zucchini bread for the weeks.'],
			cookingDirection: []
		},
		{
			name: 'Waffle w/ maple syrup, scrambled egg',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make the egg batter a night before.', 'Cut up fruits.'],
			cookingDirection: []
		},
		{
			name: 'Overnight Oatmeal w/ honey',
			mainIngredient: '',
			ingredient: [],
			prep: ['Soak rolled oats overnight in milk a night before.', 'Cut up fruits.'],
			cookingDirection: []
		},
		// {
		// 	name: '',
		// 	mainIngredient: '',
		// 	ingredient: [],
		// 	prep: [],
		// 	cookingDirection: []
		// },
	],

	//the lunch and dinner menus are almost the same.
	lunchMenus: [
		{
			name: 'Don Katsu w/ cabbage salad, sesame dressing, steamed rice',
			mainIngredient: 'pork',
			ingredient: ['pork top loin', 'cabbage', 'katsu sauce', 'panko', 'egg'],
			prep: ['1. Make '],
			cookingDirection: ['bake the katsu in the 400 F preheated oven for about 18 mins']
		},
		{
			name: 'Meatball Pasta w/ carrot, onion, mushroom',
			mainIngredient: 'meatball',
			ingredient: ['meatball', 'pasta', 'marinara sauce'],
			prep: ['meatball'],
			cookingDirection: ['put all the ingredients into instantpot and cook it in low pressure for 15 mins.'],
		},
		{
			name: 'Teriyaki Chicken w/ carrot, mungbean sprout, onion, steamed rice',
			mainIngredient: 'chicken',
			ingredient: ['chicken thigh', 'carrot', 'mungbean sprout', 'onion'],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Chicken Nugget w/ ?? ',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Orange Chicken w/ cooked rice, salads',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Hamburg Steak w/ baked potatoes, steamed vege',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Mini Hamburger w/ dinner roll, pickles, tomatoes',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Cauliflower Chicken Mac and Cheese',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Pasta Salad',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'BBQ Pork w/ steamed rice or baked potatoes, steamed vege',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Anchovy Rice Ball with Tamagoyaki(계란말이)',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Egg Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Bacon Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Beef Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Shrimp Pineapple Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Chicken Quesadilla w/ avocado, tomatoes',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'AB & J Sandwich w/ boiled egg',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Ham and Cheese Sandwich',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Shrimp Tempura w/ ??',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Fish stick with Apple Coleslaw',
			mainIngredient: 'fish',
			ingredient: ['fish stick', 'apple', ''],
			prep: [],
			cookingDirection: [],
		},
		{
			name: 'Mungbean Pancake w/ cooked rice, steamed vege ',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Shrimp Zucchini Pancake w/ cooked rice, steamed vege',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Pork and Vege Pancake(동그랑땡) w/ rice, steamed vege',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Ravioli ??',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		// {
		// 	name: 'California Roll',
		// 	mainIngredient: '',
		// 	ingredient: [],
		// 	prep: [],
		// 	cookingDirection: []
		// },
		// {
		// 	name: '',
		// 	mainIngredient: '',
		// 	ingredint: [],
		// 	prep: [],
		// 	cookingDirection: []
		// },
	],

	//the lunch and dinner menus are almost the same.
	dinnerMenus: [
		{	
			name: 'Spicy Pork(제육볶음) w/ Onion, Carrot, steamed rice, milk',
			mainIngredient: 'pork',
			ingredient: ['sliced pork', 'carrot', 'onion'],
			prep: ['make a sauce', 'slice the pork', 'marinate the pork'],
			cookingDirection: ['1. heat the pan with cooking oil', '2. add carrot and onion and pork in order']
		},
		{
			name: 'Don Katsu w/ cabbage salad, sesame dressing, steamed rice, seasonal fruit',
			mainIngredient: 'pork',
			ingredient: ['pork top loin', 'cabbage', 'katsu sauce', 'panko', 'egg'],
			prep: ['1. Make '],
			cookingDirection: ['bake the katsu in the 400 F preheated oven for about 18 mins']
		},
		{
			name: 'Meatball Pasta w/ carrot, onion, mushroom, seasonal fruit',
			mainIngredient: 'meatball',
			ingredient: ['meatball', 'pasta', 'marinara sauce'],
			prep: ['meatball'],
			cookingDirection: ['put all the ingredients into instantpot and cook it in low pressure for 15 mins.'],
		},
		{
			name: 'Teriyaki Chicken',
			mainIngredient: 'chicken',
			ingredient: ['chicken thigh', 'carrot', 'mungbean sprout', 'onion'],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Chicken Nugget',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Orange Chicken w/ cooked rice, salads',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Hamburg Steak (함박스테이크)',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Mini Hamburger',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Mac and Cheese',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Pasta Salad',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'BBQ Pork',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Anchovy Rice Ball with Tamagoyaki(계란말이)',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Egg Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Bacon Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Beef Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Shrimp Pinapple Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Chicken Quesadilla',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},	
		{
			name: 'Shrimp Tempura',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Fish stick with Apple Coleslaw',
			mainIngredient: 'fish',
			ingredient: ['fish stick', 'apple', ''],
			prep: [],
			cookingDirection: [],
			// reference: ["https://www.culinaryhill.com/easy-apple-coleslaw-recipe/"]
		},
		{
			name: 'Mungbean Pancake',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Shrimp Zucchini Pancake',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Pork and Vege Pancake(동그랑땡) w/ rice, steamed vege',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Ravioli',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		// {
		// 	name: 'California Roll',
		// 	mainIngredient: '',
		// 	ingredient: [],
		// 	prep: [],
		// 	cookingDirection: []
		// },
		// {
		// 	name: '',
		// 	mainIngredient: '',
		// 	ingredint: [],
		// 	prep: [],
		// 	cookingDirection: []
		// },
	],

	snackMenus: [
		// {
		// 	name: 'Stir Fried Bacon and Rice Cake',
		// 	mainIngredient: '',
		// 	ingredient: [],
		// 	prep: [],
		// 	cookingDirection: []
		// },
		{
			number: '1',
			name: 'Wonton',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			number: '2',
			name: 'Mini Corndog',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			number: '3',
			name: 'Korean Pancake',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			number: '4',
			name: 'Zucchini Muffin',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			number: '5',
			name: 'Carrot Muffin',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			number: '6',
			name: 'Blueberry Muffin',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			number: '7',
			name: 'Banana Muffin',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			number: '8',
			name: 'Kabocha Ricecake(백설기)',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			number: '9',
			name: 'Ham and Cheese Croissant',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			number: '10',
			name: 'Stir Fried Bacon and Rice Cake',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
	]

};




var controller = {
	init: function(){
		//tell our views to initalize
		weeklyPlanView.init();
	},

	getRandomBreakfast: function() {
		var array = model.breakfastMenus;
		var currentIndex = array.length, temporaryVAlue, randomIndex;

		//while there remain elements to shuffle
		while (0 !== currentIndex) {
			//pick a remaining element
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -=1;
			//swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	},

	getLunchMenus: function() {
		return model.lunchMenus;
	},

	//TODO: make getRandomLunch() but how do I get the menu randomly????
	getRandomLunch: function() {
		var array = model.lunchMenus;
		var currentIndex = array.length, temporaryValue, randomIndex;

		//while there remian elements to shuffle
		while (0 !== currentIndex) {
			//pick a remaining element
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			//swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	},

	getRandomDinner: function() {
		var array = model.dinnerMenus;
		var currentIndex = array.length, temporaryValue, randomIndex;

		//while there remian elements to shuffle
		while (0 !== currentIndex) {
			//pick a remaining element
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			//swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	},

	getSnackMenus: function() {
		return model.snackMenus;
	},

	getRandomSnack: function() {
		var array = model.snackMenus;
		var currentIndex = array.length, temporaryValue, randomIndex;

		//while there remian elements to shuffle
		while (0 !== currentIndex) {
			//pick a remaining element
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			//swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array; 
	},

};



var weeklyPlanView = {
	init: function(){
		mealAmount.addEventListener('submit', function(e) {
			e.preventDefault();
			weeklyPlanView.render();
		});
		
	},

	render: function(){
		let mealAmount = document.querySelector('#mealAmount');

		//BREAKFAST
		let breakfastContainer = document.querySelector('#breakfastContainer');
		let breakfastLists = document.querySelector('#breakfastLists');
		let breakfastInput = document.querySelector('#inputBreakfast');
		var breakfastRandomArray = controller.getRandomBreakfast();
		//remove existing breakfast menu lists on
		while(breakfastLists.firstElementChild !== null) {
			breakfastLists.firstElementChild.remove();
		};
		//create breakfast menu lists
		for (let i = 0; i < breakfastInput.value; i ++) {
			breakfastLists.innerHTML += `<li>${breakfastRandomArray[i].name}</li>`
		};


		//LUNCH
		let lunchContainer = document.querySelector('#lunchContainer');
		let lunchLists = document.querySelector('#lunchLists');
		let lunchInput = document.querySelector('#inputLunch');
		var lunchRandomArray = controller.getRandomLunch();
		//remove existing lunch menu lists on
		while (lunchLists.firstElementChild !== null){
			lunchLists.firstElementChild.remove();
		};	
		//create lunch menu lists 
		for (let i = 0; i < lunchInput.value; i ++) {			
			lunchLists.innerHTML += `<li>${lunchRandomArray[i].name}</li>`;
		};	

		//DINNER
		let dinnerContainer = document.querySelector('#dinnerContainer');
		let dinnerLists = document.querySelector('#dinnerLists');
		let dinnerInput = document.querySelector('#inputDinner');
		var dinnerRandomArray = controller.getRandomLunch();
		//remove existing dinner menu lists on
		while (dinnerLists.firstElementChild !== null) {
			dinnerLists.firstElementChild.remove();
		};
		//create dinner menu lists
		for (let i = 0; i < dinnerInput.value; i ++) {
			dinnerLists.innerHTML += `<li>${dinnerRandomArray[i].name}</li>`;
		};

		//SNACK
		let snackContainer = document.querySelector('#snackContainer');
		let snackLists = document.querySelector('#snackLists');
		let snackInput = document.querySelector('#inputSnack');
		var snackRandomArray = controller.getRandomSnack();
		//remove existing snack menu lists on
		while (snackLists.firstElementChild !== null){
			snackLists.firstElementChild.remove();
		};
		//create snack menu lists
		for (let i = 0; i < snackInput.value; i++) {
			snackLists.innerHTML += `<li>${snackRandomArray[i].name}</li>`;
		};
	},
};



controller.init();
