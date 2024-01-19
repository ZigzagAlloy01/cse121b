/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Iván Salamanca';
let currentYear = 2024;
let profilePicture = 'images/ivan.jpg';
let favoriteFoods = ['Pasta', 'Avocado', 'Sushi', 'Mango', 'Tacos', 'Steak'];
let additionalFood = 'Potato Salad';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');  
const yearElement = document.querySelector('#year');
const imageElement = new Image ();
imageElement.src = profilePicture;
imageElement.alt = `Profile image of ${fullName}`;

/* Step 4 - Adding Content */
displayImage(imageElement);

function displayImage(image) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.appendChild(image);
}

nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent = currentYear;
foodElement.innerHTML = favoriteFoods;
favoriteFoods.push(additionalFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;



/* Step 5 - Array */






