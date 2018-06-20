//create an object called 'USS Assembly'
const ussAssembly = {
  name: 'USS Assembly',
  hull: 20,
  firepower: 5,
  accuracy: .7,
}

//create a constructor class AlienShip, which is capitalized b.c it's a constructor class. From that you create your base information all alien ships need to have. each of the 6 aliens will get this info. Then if you want to give one alienship extra info. you just use the extend keyword and give it extra info.

class AlienShip {
  constructor(name, alienRandomizer) {
    this.name = name; //name you can put in as a parameter.
    //this.hull, this.firepower, and this.accuracy can take in functions instead of a word like hull, firepower, or accuracy.
    this.hull = alienRandomizer.randomHull;
    this.firepower = alienRandomizer.randomFirepower;
    this.accuracy = alienRandomizer.randomAccuracy;
  }
}
//the ranges given us in the lab are below...
// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8


//THESE 3 const variables are just for testing. You can just put them in the function.

// const randomHull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
// //Math floor rounds down to the closest integer. random randomizes. You say 6 is max, 3 is min, + 1 so you can reach the max, which is the 6. the 6 - 3 gives you the range. You are getting the difference. So then you are adding 3 to get back up to 6.
// //There's a possibility that 6 - 3 + 1 with the floor could output 0. So you add 3 to get back up to the minimum in your range, which is 3.
// //if the range was b.w 2 and 6 you'd put  * (6 - 2 + 1) + 2.
//
// const randomFirepower = Math.floor(Math.random() * (4 - 2 +1)) + 2;
//
// const randomAccuracy = (Math.random() * (.8 - .6) + .6).toFixed(1); //
// //Math randomizes max is .8, min. is .6. Then you do +.6 so you if you get 0 you can reach .6.
// //.toFixed brings it down to 1 decimal point. It cuts out all the long decimal points, like if you had pi and you just wanted 3.14 you'd say .toFixed(2).
// console.log(randomAccuracy);

//here, you create a function called createElements.
//each variable in the function is randomized.
//this is a function that returns an object with 3 key: value pairs.
const createElements = () => {
  const randomHull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
  const randomFirepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
  const randomAccuracy = (Math.random() * (.8 - .6) + .6).toFixed(1);
  return {
    randomHull: randomHull,
    randomFirepower: randomFirepower,
    randomAccuracy: randomAccuracy,
  }
};
console.log(createElements()); //returns {randomHull: 6, randomFirepower: 3, randomAccuracy: "0.6"}.

//However, you call the function in each of the following six alien spaceShips. You are calling the data into the constructor this way.

//THIS CREATES 6 DIFFERENT SHIPS BUT YOU ARE REPEATING YOURSELF.

// const alphaShip = new AlienShip('alf', createElements());
// console.log(alphaShip);
//
// const betaShip = new AlienShip('betty', createElements());
// console.log(betaShip);
//
// const chrisShip = new AlienShip('chris', createElements());
// console.log(chrisShip);
//
// const jessaShip = new AlienShip('jessa', createElements());
// console.log(jessaShip);
//
// const timboShip = new AlienShip('timbo', createElements());
// console.log(timboShip);
//
// const shaShip = new AlienShip('shazhad', createElements());
// console.log(shaShip);


//However, you are repeating yourself. You could make a loop instead, b.c it's running through the same codeblock.

//make an array to loop through. Refactoring.


const fleets = [];
const namesForShips = ['alpha2', 'beta2', 'chris2', 'dad', 'egg', 'farts'];

for (let i = 0; i < namesForShips.length; i++) {
  //i <= namesForShips.length goes one extra, which logs undefined.
  fleets.push(new AlienShip(namesForShips[i], createElements()));
}
console.log(fleets);
console.log(fleets[5]); //logs the farts array.



// //RULES
// 1. You attack the first alien ship
// //let's create a method to our USS Assembly object.


//---------------------ATTACK FUNCTION-----------------

const attack = () => { //attack function
  if (ussAssembly.firepower >= fleets[0].hull) {
    //if uss Assembly's firepower is greater or equal to the first ship's hull property.
    console.log(`${fleets[0].name} is destroyed`); //log fleet name is destroyed.
    fleets.shift(); //removes first element of the fleets array. Now the fleets[1] has become fleets[0]
    if (!fleets[0]) {  //also, you could put if (fleets[0] == undefined)
      alert(`The enemy is defeated. ${ussAssembly.name} has won with a ${ussAssembly.hull} score.`)
    }
    //after you destroyed the fleets[0] you get returned undefined. undefined is a false value. so you are saying if fleets[0] is not true alert the 'the enemy is defeated' statement.
  } else {
    fleets[0].hull = fleets[0].hull - ussAssembly.firepower;
    ussAssembly.hull = ussAssembly.hull - fleets[0].firepower;
    //else the USS Assembly's hull is hit.
    //We know this b.c we are subtracting the damage the fleet's firepower value is.

    if (ussAssembly.hull <= 0) { //nested if statement.
      console.log(`${ussAssembly.name} is destroyed`);
    }
  }
}
// note: $ is a diff. way to input variables into a string. anything inside ${} is read as a variable. You HAVE to use the `` backticks to identify it as a string.

console.log(ussAssembly);
console.log(fleets[0]);
// you logged inside the function, so you just need to call the function and it'll log.


// 2. If the ship survives, it attacks you
// // if else statement that contains a hitpoints type number. ex: if alienShip == 0; USS Assembly wins.
//
// 3. If you survive, you attack the ship again
// //if alienShip points > 0, keep running the attack method.
//
// If it survives, it attacks you again
// //so we could go one attack from ship, then one from alien ship or put in different info. but we need to use a loop.
//


// //OPTIONS
// 4. If you destroy the ship, you have the option to attack the next ship or to retreat
// // maybe you iterate over the array of ships, starting with ship index 0. when ship 0 is destroyed, you get two options: hit ship 1 or retreat.
//
// 5. If you retreat, the game is over, perhaps leaving the game open for further developments or options.
// //if you pick the method retreat() an alert box could pop up and say Game Over. You have retreated.
//
// You win the game if you destroy all of the aliens. //if you destroy all the aliens, you get an alert box that says "Aliens Destroyed"
// You lose the game if you are destroyed.
// //if you lose you get an alert box that says "You suck."
//
// // #5 could be an if...else if...else statement
