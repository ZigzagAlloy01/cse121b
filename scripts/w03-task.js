/* LESSON 3 - Programming Tasks */
let addNumber1 = Number(document.querySelector('#add1').value);
let addNumber2 = Number(document.querySelector('#add2').value);
let substractNumber1 = Number(document.querySelector('#subtract1').value);
let substractNumber2 = Number(document.querySelector('#subtract2').value);
let multiplyNumber1 = Number(document.querySelector('#factor1').value);
let multiplyNumber2 = Number(document.querySelector('#factor2').value);
let dividend = Number(document.querySelector('#dividend').value);
let divisor = Number(document.querySelector('#divisor').value);
let subtotalInput = document.getElementById("subtotal");
let memberCheckbox = document.getElementById("member");
let getTotalButton = document.getElementById("getTotal");
let totalSpan = document.getElementById("total");

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers(one, two) {
    return document.querySelector('#sum').innerHTML = add(one, two);;
}

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers(one, two) {
    return document.querySelector('#difference').value = subtract(one, two); 
}

/* Arrow Function - Multiply Numbers */

function multiply(number1, number2) {
    return (number1 * number2);
}

function multiplyNumbers(one, two) {
    return document.querySelector('#product').value = multiply(one, two); 
}

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return (number1 / number2);
}

function divideNumbers(one, two) {
    return document.querySelector('#quotient').value = divide(one, two); 
}

/* Decision Structure */

document.querySelector('#addNumbers').addEventListener('click', addNumbers(addNumber1, addNumber2));
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers(substractNumber1, substractNumber2));
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers(multiplyNumber1, multiplyNumber2));
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers(dividend, divisor));

//totalSpan.textContent = `$${subtotal.toFixed(2)}`;
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let listOfMultiplication = [];
/* Output Odds Only Array */
function oddNumbers(list) {
    return list.filter(element => element % 2 === 0);
}
/* Output Evens Only Array */
function evenNumbers(list) {
    return list.filter(element => element % 2 !== 0);
}
/* Output Sum of Org. Array */
function sumOfArray(list) {
    for (let i = 0; i < list.lenght; i++) {
        sum += list[i];
    }
    return sum;
}
/* Output Multiplied by 2 Array */
function multiplied(list) {
    for (let i = 0; i < list.lenght; i++) {
        listOfMultiplication.push(list[i] * 2);
    }
    return listOfMultiplication;
}
/* Output Sum of Multiplied by 2 Array */
function sumOfMultiplied(list) {
    for (let i = 0; i < list.lenght; i++) {
        sum += list[i];
    }
    return sum;
}

document.querySelector('#array').innerHTML = listOfNumbers;
document.querySelector('#odds').innerHTML = oddNumbers(listOfNumbers);
document.querySelector('#evens').innerHTML = evenNumbers(listOfNumbers);
document.querySelector('#sumOfArray').innerHTML = sumOfArray(listOfNumbers);
document.querySelector('#multiplied').innerHTML = multiplied(listOfNumbers);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied(listOfMultiplication);