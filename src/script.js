"use strict";
// // Create variable with my name
var myName = 'Hafeeza';
// //Create const with the number of states 
var states = 50;
//Compute the results of adding 5 & 4
var addNum = 5 + 4;
console.log(5 + 4);
add();
// //Write a function sayHello that displays an alert "Hello World!"
function sayHello() {
    alert("Hello World!");
}
sayHello();
//Write function checkAge 
function checkAge(name, age) {
    if (age <= 20) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
//Create an array of favorite veggies 
var vegArray = ['potatoes', 'green beans', 'squash', 'bell pepper'];
for (var i = 0; i < vegArray.length; i++) {
    console.log(vegArray[i]);
}
var petDetails = {
    name: 'Braylon',
    breed: 'Pekingnese'
};
//console.log(pet.name, pet.breed)
var ageArray = [{
        name: 'Glenda',
        age: 27
    },
    { name: 'Brandon',
        age: 35
    },
    { name: 'Brittany',
        age: 30 },
    {
        name: 'Jaycee',
        age: 17
    },
    {
        name: 'Caden',
        age: 19
    }
];
for (var index = 0; index < ageArray.length; index++) {
    console.log(ageArray[index]);
}
checkAge(ageArray);
function getLength(word) {
    return word.length;
}
var stringLength = getLength('hello world');
if (stringLength % 2 == 0) {
    console.log("The world is nice and even.");
}
else {
    console.log("The world is an odd place.");
}
