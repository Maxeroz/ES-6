// Template Literals

let word1 = "Maxim";
let word2 = "Ozerskii";
let num1 = 2;
let num2 = 3;

let example = `${word1}
${word2}
`
// console.log(example);
document.getElementById("example").innerText = example;

// Destructuring objects

// const player = {
//     name: "Lebron James",
//     club: "LA Lakers",
//     address: {
//         city: "Los Angeles"
//     }

// }

// console.log( player.address.city)
// const { name, club, address: { city }} = player;
// console.log(`${name} plays for ${club}`);
// console.log(`${name} lives in ${city}`);

// Destructuring objects(Challenge)

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const { name, age, projects: {diceGame}} = student;

// console.log(name);
// console.log(age);
// console.log(diceGame);

// Destructuring Arrays

let [firstName, middleName, lastName] = ["Dylan", "Coding God", "Israel"];
lastName = "Clements"
// console.log(lastName)

// Object Literal

// function addressMaker (city, state) {
//     const newAdress = {city, state} ;

//     console.log(newAdress)
// }
// addressMaker("Austin", "Texas")

// Object Literal (Challenge)

// function addressMaker(address) {
//     const { city, state} = address;
//     const newAddress = {
//         city,
//         state,
//         country: "United States"
//     }
//     console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)

// }
// addressMaker({city: "Austin", state: "Texas"})

// For of Loop

// let incomes = [62000, 67000, 75000];
// let total = 0;

// for (const income of incomes) {
//     total += income;
// }
// console.log(total)

// let fullName = "Dylan Coding God Israel"

// for (const char of fullName) {
//     console.log(char)
// }

// For of Loop (Challenge)

// const students = [
//     {name: "John", city: "New York"},
//     {name: "Peter", city: "Paris"},
//     {name: "Kate", city: "Sidney"}
// ]

// for (const student of students) {
//     console.log(`${student.name} lives in ${student.city}`)
// }

// Spread Operator

// let contacts = ["Mary", "Joel", "Danny"];
// let personalFriends = [ "David", ...contacts, "Lily"];

// contacts.push("John")

// console.log(personalFriends)

// let person = {
//     name: "Adam",
//     age: 25,
//     city: "Manchester"
// }

// let employee = {
//     ...person,
//     salary: 50000,
//     position: "Software Developer"
// }

// console.log(employee)

// Spread Operator (Challenge)

// const shoppingList = ["eggs", "milk", "butter"];
// const shoppingBasket = [...shoppingList, "ice cream", "bread"];
// console.log(shoppingBasket)

// Rest Operator

// function add(...nums) {
//     console.log(nums)
// }

// add(4,5,7,8,12)

// Arrow Functions
// function declaration
// function breakfastMenu() {
//     return "I'm going to scrambled eggs for breakfast";
// }

// anonymous function
// const lunchMenu = function() {
//     return "I'm going to eat pizza for lunch";
// }

// arrow function

// const dinnderMenu = food => `I'm going to eat ${food} for dinner`;

// console.log( dinnderMenu("chicken salad") )

// Default Params

// const leadSinger = (artist = "Someone") => {
//     console.log(`${artist} is the lead singer of Cold Play`)
// }

// leadSinger()

// Default Params (Challenge)

const returnFood = (food = "something") => {
 return "I'm going to buy " + food + " from the grocery shop"}

console.log(returnFood())