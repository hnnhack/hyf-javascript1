/* 
1. Strings!

Consider the following string:

let myString = "hello,this,is,a,difficult,to,read,sentence";

1.1 Add the string to your file and log it.
1.2 Log the length of myString.
1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
1.4 Log myString to see if you succeeded.
*/

let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString);

console.log(myString.length);

let regex1 = /,/g;

//myString.replace(regex1,' ');
console.log(regex1[Symbol.replace](myString, ' '));

/* 
2. Arrays!

Consider the following array:

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
2.2 Log your new array!
2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
2.4 Write a console.log statement that explains in words you think the new value of the array is.
2.5 Log your new array!
2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).
2.7 Jason does not like 'giraffe', delete this animal from the array.
2.8 Again log your new array.
2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).
*/

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push("Mauro's favorite animal 'turtle'");

console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");

console.log("Our Array after added 'meerkat' which is Jim's favorite animal between 'blowfish' and 'capricorn': ");

console.log(favoriteAnimals);

console.log("The array has a length of: " + favoriteAnimals.length);

favoriteAnimals.splice(3, 1);

console.log(favoriteAnimals);

const indexMeerkat = favoriteAnimals.indexOf("meerkat");

console.log("The item you are looking for is at index: " + indexMeerkat);

/*
1. Create a function that takes 3 arguments and returns the sum of the these arguments.
*/

const sumOfThreeArg = (arg1, arg2, arg3) => {
    return arg1 + arg2 + arg3;;
}

console.log(sumOfThreeArg(1, 2, 3));

/*
2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
*/

const colorCar = (color) => {
    console.log("a " + color + " car");
}

colorCar("red");

/*
3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
*/

/*
4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
*/

const vehicleType = (color, oneForCar) => {
    if(oneForCar === 2) 
        console.log("a " + color + " motorbike");
    if(oneForCar === 1) 
        console.log("a " + color + " car");
}

vehicleType("blue", 2);

/*
5. Can you write the following without the if statement, but with just as a single line with console.log(...);?

if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}
*/

(3 === 3) ? console.log("yes") : console.log("no");

/*
6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'.
*/


let vehicle = (colorOfVehicle, twoFor, usedCar) => {
    
    usedCar === 1 ? usedCar = " new" : usedCar = " used";

        if(twoFor === 3) 
    
        console.log("a " + colorOfVehicle + usedCar + " bike");

        if(twoFor === 2) 
    
        console.log("a " + colorOfVehicle + usedCar + " motorbike");
    
        if(twoFor === 1) 
    
        console.log("a " + colorOfVehicle + usedCar + " car");
    
}

vehicle("blue", 1, 5);

/*
7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
*/

let vehicles = ["motorbike", "caravan", "bike", "car"];

    console.log("This is list of vehicles: ");

for(let i = 0; i < vehicles.length; i++)

    console.log(vehicles[i]);

/*
8. How do you get the third element from that list?
*/

    console.log("The third element of vehicles is: " + vehicles[2]);

/*
9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
 */

vehicle("green", 3, 1);

/*
10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
*/
const advertisement = () => {

console.log("Amazing Joe's Garage, we service ");
for(let i = 0; i < vehicles.length; i++){

    if(i === vehicles.length - 1)
    console.log("and " + vehicles[vehicles.length - 1] + "s.");
    
    else if(i === vehicles.length - 2)
    console.log(vehicles[i] + "s ");
    
    else
    console.log(vehicles[i] + "s, ");
}
}

advertisement();

/*
11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
*/

vehicles.push("train");

advertisement();

/*
12. Create an empty object.
*/

const emptyObject = [];

/*
13. Create an object that contains the teachers that you have had so far for the different modules.
*/

let teachers = {
    name: "Philip",
    name: "Igor",
    name: "Nick"
};

/*
14. Add a property to the object you just created that contains the languages that they have taught you.
*/

teachers.language = "CSS";
teachers.language = "CLI";
teachers.language = "JS";

/*
15. Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

    Don't cheat! Seriously - try it first.

Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output. Press the Run button in the upper right corner to run the code.

More insights from this Stack Overflow question.
*/

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

(x == y) ? console.log("Values of x and y are equal.") : console.log("Values of x and y are not equal.");

(x === y) ? console.log("Both values and types of x and y are equal.") : console.log("Types of x and y are not equal.");

(z == y) ? console.log("Values of z and y are equal.") : console.log("Values of z and y are not equal.");

(z == x) ? console.log("Values of z and x are equal.") : console.log("Values of z and x are not equal.");

/*
16. Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

Does the order that you assign (o3 = o2 or o2 = o3) matter?
*/

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o2.name = "o2";
(o2 === o3) ? console.log("changing o2 changes o3: yes") : console.log("changing o2 changes o3: no");

o1.name = "o1";
(o1 === o3) ? console.log("changing o1 changes o3: yes") : console.log("changing o1 changes o3: no");

/*
17. What does the following code return? (And why?)

    let bar = 42;
    typeof typeof bar;

    ‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.
*/

let bar = 42;
typeof typeof bar;

console.log(typeof typeof bar);

console.log("typeof bar variable is number and typeof returns string, that's why typeof typeof is string.");


const myObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    friend: ["Rob", "John", "Mary"],
  }
  
  const logObject = obj => {
    Object.keys(obj).forEach(e => {
      console.log(e, obj[e]);
    });
  }
  
  logObject(myObject);
  
  
  const logObject2 = obj => {
    Object.entries(obj).forEach(([key, value]) => {
      console.log(key, value);
    })
  }
  
  logObject2(myObject);
  