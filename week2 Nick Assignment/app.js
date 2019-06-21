/* 
Array manipulation

Arguement: [5, 3, 2, 9, 19, 20, 3, 5] First, remove both 3s from the array, then add a 100 to the array.

Return: Array 
*/

removeAddNumber = (x, y) => {

    let numbers = [5, 3, 2, 9, 19, 20, 3, 5];

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] === x)
            numbers.splice(i, 1);
    }
    numbers.push(y);
    return numbers;
};

console.log(removeAddNumber(3, 100));

/* 
Object Fun

Make an array of pet objects, this pet object should include animal name animal weight animalSound - the animal sound should be a function that console logs the sound the animal makes (meow, moo, oink) loop through the array and print out the animal sound and name

Return: void (nothing)
*/

animalSound = () => {
const pets = [
    firstPet = {
        name: "cat",
        weight: 5,
        sound: function() {
            console.log("meow");
        }
    },
    secondPet = {
        name: "cow",
        weight: 100,
        sound: function() {
            console.log("moo");
        }
    },
    thirdPet = {
        name: "xxx",
        weight: 30,
        sound: function() {
            console.log("oink");
        }
    }
]
for(i = 0; i < pets.length; i++)
    console.log(pets[i].name + pets[i].sound());
};

animalSound();

/*
String Manipulation

Arguement: 'Hello, it is a good day, I eat good bananas, I do not like the word good' remove the word 'good' from the string

Return: String
*/

removeWord = () => {
let Arguement = "Hello, it is a good day, I eat good bananas, I do not like the word good";
let noNeed = /good/gi;

return console.log(Arguement.replace(xxx,""));
};

removeWord();

/*
Conditionals

Write a program that prints out, in reverse order, every multiple of 3 between 1 and 200. output should be 198 195 192 ......

Return: void (nothing)
*/

everyMultipleBetween = (h, p, d) => {

let nummer = [];

for(let i = h; i <= p; i++)
    nummer[i-1] = i;

for(let c = p; c >= h; c--){
    if((nummer[c] % d) === 0 )
        console.log((nummer[c]));
}
};

everyMultipleBetween(1, 200, 3);
