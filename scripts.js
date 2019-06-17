var model = {
	breakfastMenus: [
		{
			name: 'Pancake w/ maple syrup, scrambled egg',
			mainIngredient: 'pancake',
			ingredient: ['a','b', 'c'],
			prep: ['Make the batter.', 'Cut up fruits.'],
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
			prep: ['Make the egg batter.', 'Cut up fruits.'],
			cookingDirection: []
		},
		{
			name: 'Overnight Oatmeal w/ honey',
			mainIngredient: '',
			ingredient: [],
			prep: ['Soak rolled oats overnight in milk.', 'Cut up fruits.'],
			cookingDirection: []
		},
		{
			name: 'Anchovy rice ball',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make fried anchovy and chopped veges.'],
			cookingDirection: []
		},
		{
			name: 'AB and J Sandwiches w/ scrambled/boiled/fried egg',
			mainIngredient: '',
			ingredient: [],
			prep: [''],
			cookingDirection: []
		},
	],

	//the lunch and dinner menus are almost the same.
	lunchMenus: [
		{
			name: 'Don Katsu w/ cabbage salad, sesame dressing, steamed rice',
			mainIngredient: 'pork',
			ingredient: ['pork top loin', 'cabbage', 'katsu sauce', 'panko', 'egg'],
			prep: ['Make Don Katsu for the week.', 'Cut up the cabbage.', 'Make sesame dressing.'],
			cookingDirection: ['Bake the katsu in the 400 F preheated oven for about 18 mins']
		},
		{
			name: 'Meatball Pasta w/ carrot, onion, mushroom',
			mainIngredient: 'meatball',
			ingredient: ['meatball', 'pasta', 'marinara sauce'],
			prep: ['Make meatballs for the week.', 'Finely chop the veges.'],
			cookingDirection: ['put all the ingredients into instantpot and cook it in low pressure for 15 mins.'],
		},
		{
			name: 'Teriyaki Chicken w/ carrot, mungbean sprout, onion, steamed rice',
			mainIngredient: 'chicken',
			ingredient: ['chicken thigh', 'carrot', 'mungbean sprout', 'onion'],
			prep: ['Marinate the chicken.', 'Cut up the all veges.'],
			cookingDirection: []
		},
		{
			name: 'Chicken Nugget w/ homemade potato wedges, steamed broccoli',
			mainIngredient: '',
			ingredient: [],
			prep: ['Cut up the potatoes and soak in the water.', 'Steam the broccoli.'],
			cookingDirection: []
		},
		{
			name: 'Orange Chicken w/ cooked rice, salad',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Hamburg Steak w/ potato wedges, steamed vege',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make hamburg steak for the week.', 'Cut up the potatoes and soak in the water.', 'Steam the veges.'],
			cookingDirection: []
		},
		{
			name: 'Mini Hamburger w/ dinner roll, pickles, diced tomatoes',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make patties for the week.', 'Dice tomatoes.'],
			cookingDirection: []
		},
		{
			name: 'Cauliflower Chicken Mac and Cheese',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		// {
		// 	name: 'Pasta Salad (마카로니 샐러드)',
		// 	mainIngredient: '',
		// 	ingredient: [],
		// 	prep: [''],
		// 	cookingDirection: []
		// },
		// {
		// 	name: 'Pasta Salad (그릭샐러드)',
		// 	mainIngredient: '',
		// 	ingredient: [],
		// 	prep: [''],
		// 	cookingDirection: []
		// },
		// {
		// 	name: 'Pasta Salad (코브샐러드)',
		// 	mainIngredient: '',
		// 	ingredient: [],
		// 	prep: [''],
		// 	cookingDirection: []
		// },
		{
			name: 'BBQ Pork w/ steamed rice or potato wedges, steamed vege',
			mainIngredient: '',
			ingredient: [],
			prep: ['Cook BBQ Pork a night before', 'Steam the veges'],
			cookingDirection: []
		},
		{
			name: 'Anchovy Rice Ball with Tamagoyaki(계란말이)',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make fried anchovy and fried veges.', 'Make tamagoyaki batter.'],
			cookingDirection: []
		},
		{
			name: 'Egg Fried Rice w/ steamed edamame',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make fried rice.', 'Steam Edamame.'],
			cookingDirection: []
		},
		{
			name: 'Bacon Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make fried rice.'],
			cookingDirection: []
		},
		{
			name: 'Beef Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make fried rice.'],
			cookingDirection: []
		},
		{
			name: 'Shrimp Pineapple Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make fried rice.'],
			cookingDirection: []
		},
		{
			name: 'Chicken Quesadilla w/ avocado, tomatoes',
			mainIngredient: '',
			ingredient: [],
			prep: ['Cook chicken.', 'Chop avocado and tomatoes.'],
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
			name: 'Shrimp Tempura w/ homemade potato wedges, steamed broccoli',
			mainIngredient: '',
			ingredient: [],
			prep: ['Soak potatoes.', 'Steam broccoli'],
			cookingDirection: []
		},
		{
			name: 'Fish stick with Apple Coleslaw',
			mainIngredient: 'fish',
			ingredient: ['fish stick', 'apple', ''],
			prep: ['Make apple coleslaw.'],
			cookingDirection: [],
		},
		{
			name: 'Mungbean Pancake w/ cooked rice, steamed vege ',
			mainIngredient: '',
			ingredient: [],
			prep: ['Steam vege.', 'Make mungbean pancake batter.'],
			cookingDirection: []
		},
		{
			name: 'Shrimp Zucchini Pancake w/ cooked rice, steamed vege',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make shrimp zucchini pancake batter.', 'Steam veges.'],
			cookingDirection: []
		},
		{
			name: 'Pork and Vege Pancake(동그랑땡) w/ rice, steamed vege',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make pork and vege pancake.', 'Steam vege.'],
			cookingDirection: []
		},
		// {
		// 	name: 'Ravioli ??',
		// 	mainIngredient: '',
		// 	ingredient: [],
		// 	prep: [],
		// 	cookingDirection: []
		// },
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
			prep: ['Make Don Katsu for the week.', 'Cut up the cabbage.', 'Make sesame dressing.'],
			cookingDirection: ['bake the katsu in the 400 F preheated oven for about 18 mins']
		},
		{
			name: 'Meatball Pasta w/ carrot, onion, mushroom, seasonal fruit',
			mainIngredient: 'meatball',
			ingredient: ['meatball', 'pasta', 'marinara sauce'],
			prep: ['Make meatballs for the week.', 'Finely chop the veges.'],
			cookingDirection: ['put all the ingredients into instantpot and cook it in low pressure for 15 mins.'],
		},
		{
			name: 'Teriyaki Chicken',
			mainIngredient: 'chicken',
			ingredient: ['chicken thigh', 'carrot', 'mungbean sprout', 'onion'],
			prep: ['Marinate the chicken.', 'Cut up the all veges.'],
			cookingDirection: []
		},
		{
			name: 'Chicken Nugget w/ homemade potato wedges, steamed broccoli',
			mainIngredient: '',
			ingredient: [],
			prep: ['Cut up the potatoes and soak in the water.', 'Steam the broccoli.'],
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
			name: 'Hamburg Steak w/ potato wedges, steamed vege',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make hamburg steak for the week.', 'Cut up the potatoes and soak in the water.', 'Steam the veges.'],
			cookingDirection: []
		},
		{
			name: 'Mini Hamburger w/ dinner roll, pickles, diced tomatoes',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make patties for the week.', 'Dice tomatoes.'],
			cookingDirection: []
		},
		{
			name: 'Cauliflower Chicken Mac and Cheese',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		// {
		// 	name: 'Pasta Salad (마카로니 샐러드)',
		// 	mainIngredient: '',
		// 	ingredient: [],
		// 	prep: [''],
		// 	cookingDirection: []
		// },
		// {
		// 	name: 'Pasta Salad (그릭샐러드)',
		// 	mainIngredient: '',
		// 	ingredient: [],
		// 	prep: [''],
		// 	cookingDirection: []
		// },
		// {
		// 	name: 'Pasta Salad (코브샐러드)',
		// 	mainIngredient: '',
		// 	ingredient: [],
		// 	prep: [''],
		// 	cookingDirection: []
		// },
		{
			name: 'BBQ Pork w/ steamed rice or potato wedges, steamed vege',
			mainIngredient: '',
			ingredient: [],
			prep: ['Cook BBQ Pork a night before', 'Steam the veges'],
			cookingDirection: []
		},
		{
			name: 'Anchovy Rice Ball with Tamagoyaki(계란말이)',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make fried anchovy and fried veges.', 'Make tamagoyaki batter.'],
			cookingDirection: []
		},
		{
			name: 'Egg Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make fried rice.', 'Steam Edamame.'],
			cookingDirection: []
		},
		{
			name: 'Bacon Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make fried rice.'],
			cookingDirection: []
		},
		{
			name: 'Beef Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make fried rice.'],
			cookingDirection: []
		},
		{
			name: 'Shrimp Pinapple Fried Rice',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make fried rice.'],
			cookingDirection: []
		},
		{
			name: 'Chicken Quesadilla w/ avocado, tomatoes (guacamole & salsa)',
			mainIngredient: '',
			ingredient: [],
			prep: ['Cook chicken.', 'Chop avocado and tomatoes.'],
			cookingDirection: []
		},	
		{
			name: 'Shrimp Tempura w/ homemade potato wedges, steamed broccoli',
			mainIngredient: '',
			ingredient: [],
			prep: ['Soak potatoes.', 'Steam broccoli'],
			cookingDirection: []
		},
		{
			name: 'Fish stick with Apple Coleslaw',
			mainIngredient: 'fish',
			ingredient: ['fish stick', 'apple', ''],
			prep: ['Make apple coleslaw.'],
			cookingDirection: [],
			// reference: ["https://www.culinaryhill.com/easy-apple-coleslaw-recipe/"]
		},
		{
			name: 'Mungbean Pancake w/ cooked rice, steamed vege ',
			mainIngredient: '',
			ingredient: [],
			prep: ['Steam vege.', 'Make mungbean pancake batter.'],
			cookingDirection: []
		},
		{
			name: 'Shrimp Zucchini Pancake w/ cooked rice, steamed vege',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make shrimp zucchini pancake batter.', 'Steam veges.'],
			cookingDirection: []
		},
		{
			name: 'Pork and Vege Pancake(동그랑땡) w/ rice, steamed vege',
			mainIngredient: '',
			ingredient: [],
			prep: ['Make pork and vege pancake.', 'Steam vege.'],
			cookingDirection: []
		},
		// {
		// 	name: 'Ravioli',
		// 	mainIngredient: '',
		// 	ingredient: [],
		// 	prep: [],
		// 	cookingDirection: []
		// },
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
			name: 'Wonton w/ edamame',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Mini Corndog',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Korean Pancake (호떡)',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Zucchini Muffin',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Carrot Muffin',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Blueberry Muffin',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Banana Muffin',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Kabocha Ricecake(백설기)',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Ham and Cheese Croissant',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Stir Fried Bacon and Rice Cake',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Granola w/ yogurt',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Pretzel Chips w/ salami and cheese',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Multigrain Crackers w/ String Cheese',
			mainIngredient: '',
			ingredient: [],
			prep: [],
			cookingDirection: []
		},
		{
			name: 'Baked Sweet Potatoes w/ raisins',
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
