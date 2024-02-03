/* LESSON 3 - Programming Tasks */
const newImage = document.querySelector('#photo');

/* Profile Object  */
let myProfile = {
    name: "Ivan Salamanca",
    photo: 'images/ivan.jpg',
    favoriteFoods: [
        'Pasta', 
        'Avocado', 
        'Sushi', 
        'Mango', 
        'Tacos', 
        'Steak'
    ],
    hobbies: [
        'read',
        'write',
        'hang out with friends',
        'talk to Andrea',
        'watch The Godfather',
        'collect photos of clouds and sunsets'
    ],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place:'Ciudad Juarez',
        length: '21 years'
    },
    {
        place: 'Iztacalco',
        length: '2 months'
    },
    {
        place:'Iztapalapa',
        length: '6 months'
    },
    {
        place:'Nezahualcoyotl',
        length: '6 months'
    },
    {
        place:'Chimalhuacan',
        length: '6 months'
    },
    {
        place:'Texcoco',
        length: '4 months'
    }
);




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
newImage.src = myProfile.photo;
newImage.alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let listFood = document.createElement('li');
    listFood.textContent = food;
    document.querySelector('#favorite-foods').appendChild(listFood)
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let listHobbie = document.createElement('li');
    listHobbie.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(listHobbie)
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let placeIndt = document.createElement('dt');
    placeIndt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(placeIndt)
    let lengthIndd = document.createElement('dd');
    lengthIndd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(lengthIndd)
})

