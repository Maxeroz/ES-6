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

const player = {
    name: "Lebron James",
    club: "LA Lakers",
    address: {
        city: "Los Angeles"
    }

}

console.log( player.address.city)

const { name, club, address: { city }} = player;

console.log(`${name} plays for ${club}`);

console.log(`${name} lives in ${city}`);