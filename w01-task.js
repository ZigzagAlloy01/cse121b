// 🔍 Part 1 error
let userName = "Moroni";
console.log(`Username: ${userName}`);
userName = "Moronihah";
console.log(`Username: ${userName}`);

// 🔍 Part 2 error
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const currentDateAndTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
console.log(`It is now ${currentDateAndTime}`);

// 🔍 Part 3 error. The following statement calls a function named total that accepts any number of arguments and returns the sum. The returned value is stored in a variable named theTotal. 1-10 are the arguments.

let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

// 'total' function declaration
function total(...theNumbers) {
	let sum = 0;
	for (let aNumber of theNumbers) {
		sum += aNumber * 1; // Why do we use * 1? It implicitly converts a string to a number.
	}
	return sum
//In JavaScript, the for ... in loop is used to iterate over the properties of an object, not for iterating over the elements of an array. When used with an array, it iterates over the indices of the array, not the actual elements. Thus returning 45 as the indices are 0 to 9. The solution can be to change the for loop to a for ... of loop. The function should return 55.
}
