let array = [];
for (let i = 0; i < 10; i++) {
	array[i] = Math.floor((Math.random() * 101));
}
function showArray(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(`Array [${i + 1}]: ${array[i]}`);
	}
}
showArray(array);
function showPair(array) {
	for (let pair in array) {
		if (pair % 2 != 0) {
			console.log(`Pair elements: ${array[pair]}`);
		}
	}
}
showPair(array);
function multiple_by_7(array) {
	console.log("Multiple by 7 :", array.find((elem) => elem % 7 == 0));
}
multiple_by_7(array);
function sort_by_decrease(array) {
	console.log(`Sorted array: ${array.sort((a, b) => a < b)}`);
}

// sort_by_decrease(array);
function half_0(array) {
	for (let i = Math.floor(array.length / 2); i < array.length; i++) {
		array[i] = 0;
		console.log(`Second half of Array [${i + 1}]: ${array[i]}`);
	}
}

function checksame(array) {
	let count = 0;
	for (let i = 0; i < array.length; i++)
		if (array[i] == array[i + 1]) { count++; }
	console.log(`In current Array we have ${count} elemnts that are equal`);
}
// checksame(array);
// half_0(array);
let index = +prompt('Введіть індекс: ');
function delindex(index) {
	array.splice(index, 1);
	console.log(array);
}
delindex(index);