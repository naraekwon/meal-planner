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
	//remove existing table using while loop
	while (table.firstElementChild !== null){
		table.firstElementChild.remove();
		console.log('deleting');
	}
	//plan
	newTableRow = document.createElement('tr');
	for(let i = 1; i <= b; i++){
		newList = document.createElement('ul');
		newList.innerHTML = "Breakfast" + i;
		newTableRow.appendChild(newList);
	};
	table.appendChild(newTableRow);

	newTableRow = document.createElement('tr');
	for(let i = 1; i <= l; i++){
		newList = document.createElement('ul');
		newList.innerHTML = "Lunch" + i;
		newTableRow.appendChild(newList);
	};
	table.appendChild(newTableRow);


	newTableRow = document.createElement('tr');
	for(let i = 1; i <= d; i++){
		newList = document.createElement('ul');
		newList.innerHTML = "Dinner" + i;
		newTableRow.appendChild(newList);
	};
	table.appendChild(newTableRow);

	newTableRow = document.createElement('tr');
	for(let i = 1; i <= s; i++){
		newList = document.createElement('ul');
		newList.innerHTML = "Snack" + i;
		newTableRow.appendChild(newList);
	};
	table.appendChild(newTableRow);
}