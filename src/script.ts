// // Create variable with my name
let myName: string = 'Hafeeza';

// //Create const with the number of states 
const states: number = 50 

//Compute the results of adding 5 & 4
const addNum: number = 5 + 4


// //Write a function sayHello that displays an alert "Hello World!"
function sayHello(): void{
    alert("Hello World!")
}
sayHello()

//Write function checkAge 
function checkAge(name: string, age: number){
    if ( age <= 20){
alert(`Sorry ${name}, you aren't old enough to view this page!`)
    } 
}
checkAge('Charles', 21)
checkAge('Abby', 27)
checkAge('James', 18)
checkAge('John', 17)

//Create an array of favorite veggies 
 let vegArray: string[] = ['potatoes', 'green beans', 'squash', 'bell pepper']

 for (let i = 0; i < vegArray.length; i++) {
   console.log(vegArray[i])
     
 }

 let petDetails: object = {
     name: 'Braylon',
     breed: 'Pekingnese'
 }
 //console.log(pet.name, pet.breed)

 let ageArray: Person[] = [{
     name: 'Glenda',
     age: 27
 },
{name: 'Brandon',
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

] 
//created new type specific to the above grouping
interface Person {
    name: string,
    age: number
}

 
for (let index = 0; index < ageArray.length; index++) {
    console.log(ageArray[index])
} 
   

    function getLength(word: string): number {
     return word.length
  }     
  let stringLength: number = getLength('hello world')

if(stringLength % 2 == 0){
    console.log("The world is nice and even.")

}else {
    console.log("The world is an odd place.")
}