let mealAmount = document.querySelector('#mealAmount');
let table = document.querySelector('#mealPlanCanvas');
let breakfast = document.querySelector('#inputBreakfast');
let lunch = document.querySelector('#inputLunch');
let dinner = document.querySelector('#inputDinner');
let snack = document.querySelector('#inputSnack');

//when amount of meals is submitted by the user, call plan()
mealAmount.addEventListener('submit', function(e) {
	e.preventDefault();
	console.log('submitting');
	plan(breakfast.value, lunch.value, dinner.value, snack.value);
});



function plan(b, l, d, s){
	// let iterable = new Map([[breakfast.value, 'breakfast'], [lunch.value, 'lunch'], [dinner.value, 'dinner'], [snack.value, 'snack']]);
	
	//remove existing table using while loop
	while (table.firstElementChild !== null){
		table.firstElementChild.remove();
		console.log('deleting');
	}

	//create a new weekly plan
	// for (let entry of iterable) {
	// 	newTableRow = document.createElement('tr');
	// 	for (let i = 1; i <= entry[0]; i ++){
	// 		newList = document.createElement('ul');
	// 		newList.innerHTML = entry[1] + i;
	// 		newTableRow.appendChild(newList);
	// 	}
	// 	table.appendChild(newTableRow);
	// }


	newTableRow = document.createElement('tr');
	for(let i = 1; i <= b; i++){
		newList = document.createElement('ul');
		newList.innerHTML = "Breakfast" + i;
		newTableRow.appendChild(newList);
		if (i == b) {
			table.appendChild(newTableRow);
		};
	};
	

	newTableRow = document.createElement('tr');
	for(let i = 1; i <= l; i++){
		newList = document.createElement('ul');
		newList.innerHTML = "Lunch" + i;
		newTableRow.appendChild(newList);
		if (i == l) {
			table.appendChild(newTableRow);
		};
	};


	newTableRow = document.createElement('tr');
	for(let i = 1; i <= d; i++){
		newList = document.createElement('ul');
		newList.innerHTML = "Dinner" + i;
		newTableRow.appendChild(newList);
		if (i == d) {
			table.appendChild(newTableRow);
		};
	};

	newTableRow = document.createElement('tr');
	for(let i = 1; i <= s; i++){
		newList = document.createElement('ul');
		newList.innerHTML = "Snack" + i;
		newTableRow.appendChild(newList);
		if (i == s) {
			table.appendChild(newTableRow);
		};
	};
}