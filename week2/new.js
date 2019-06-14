// console.log('Hello world! // English \n Merhaba Dunya! // Turkce \n Hallo Wereld! // Netherlands \n Privet Mir! // Ruskiy');
// console.log('I\'m awesome');

let x;
console.log("the value of my variable x will be: whateverYouThinkItWillLog"); //the value of my variable x will be: whateverYouThinkItWillLog
console.log(x); //undefined
x = 5;
console.log(x); //5

let y = "";
console.log('the value of my string y will be: whateverYouThinkItWillLog'); //the value of my string y will be: whateverYouThinkItWillLog
console.log(y); //""
y = "Hey";
console.log('the value of my string y will be: whateverYouThinkItWillLog'); //the value of my string y will be: whateverYouThinkItWillLog
console.log(y); //"Hey"

let z = 7.25;
console.log(z); //7.25
let a = Math.round(z);
console.log(a); //7

if(a > z)
console.log(a);
else
console.log(z); //7.25

let fruits = [];
console.log('the value of my array fruits will be: whateverYouThinkItWillLog'); //the value of my array fruits will be: whateverYouThinkItWillLog
console.log(fruits); //[]
let animals = ['dog', 'cat', 'mouse', 'parrot'];
console.log(animals); //['dog', 'cat', 'mouse', 'parrot']
animals.push('baby pig');
console.log(animals); //['dog', 'cat', 'mouse', 'parrot', 'baby pig']

let myString = "this is a test";
console.log(myString); //"this is a test"
myString.length;
console.log(myString.length); //14

let declare = "This is declare";
console.log("The value of my variable declare is: " + declare); //The value of my variable declare is: This is declare
let four = 4;
console.log("The value of my variable four is: " + four); //The value of my variable four is: 4
let variables = [];
console.log("The value of my variable variables is: " + variables); //The value of my variable variables is: 
let compare = true;
console.log("The value of my variable compare is: " + compare); //The value of my variable compare is: true

console.log('the type of my variable declare will be: whateverYouThinkItWillLog'); //the type of my variable declare will be: whateverYouThinkItWillLog
console.log('the type of my variable four will be: whateverYouThinkItWillLog'); //the type of my variable four will be: whateverYouThinkItWillLog
console.log('the type of my variable variables will be: whateverYouThinkItWillLog'); //the type of my variable variables will be: whateverYouThinkItWillLog
console.log('the type of my variable compare will be: whateverYouThinkItWillLog'); //the type of my variable compare will be: whateverYouThinkItWillLog

console.log("The type of my variable declare is: " + typeof declare); //The type of my variable declare is: string
console.log("The type of my variable four is: " + typeof four); //The type of my variable four is: number
console.log("The type of my variable variables is: " + typeof variables); //The type of my variable variables is: object
console.log("The type of my variable compare is: " + typeof compare); //The type of my variable compare is: boolean

let b = 234;
let c = "Hi";

if(b === c)
  console.log("SAME TYPE");
else
  console.log("TYPE IS NOT SAME"); //"TYPE IS NOT SAME"

let d = 7;
d = d % 3;
console.log("The new value of variable d is: " + d); //"The new value of variable d is: 1"

let e = 15;
e = e % 5;
console.log("The new value of variable d is: " + e); //"The new value of variable d is: 0"

let f = 15;
f = f % 3;
console.log("The new value of variable d is: " + d); //"The new value of variable d is: 1"

let g = 15;
g = g % 4;
console.log("The new value of variable d is: " + g); //"The new value of variable d is: 3"

let variables = ["Hello", 7, true];

console.log(variables); //["Hello", 7, true]

console.log(typeof variables[0]); //"string"
console.log(typeof variables[1]); //"number"
console.log(typeof variables[2]); //"boolean"

variables.push(undefined);

console.log(variables); //["Hello", 7, true, undefined]

console.log(typeof variables[3]); //"undefined"


if(6/0 === 10/0)
  console.log("yes"); //"yes"
else
  console.log("no");

console.log("Great Job! Congragulations, well done your above assignments!"); //"Great Job! Congragulations, well done your above assignments!"