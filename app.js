console.log('hi');

// So far we have seen:
//
// Strings
// Numbers
// Booleans
// Arrays
// Objects
// When these datatypes are combined, we get a data structure, for example, an array that contains objects that each contain booleans.
//
// Let's say you are tasked with creating some software, and it is up to you to determine which datatypes and what data structure to use.
//
// Answer the Following
// For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

// A light switch that can be either on or off.
// //A boolean where true: on and false: off
// if (lightswitch == 'on') {
//   return true;
// }
//
//
// // A user's email address.
// //a string b.c you need to be able to encompass numbers.
// windows.alert('Email address here, please:');
//
// // A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// //an object named spaceship.
// const spaceschip = {
//   hull: '',
//   laser blaster: true,
//   tractor beam: '25 feet',
//   warp drive: 10
// }
//
// // A list of student names from our class.
// //an array b.c that's all you need.
// const namesOfPartyPotensh = [];
//
// // A list of student names from our class, each with a location.
// an object with a key: value pair
// // const names = {
//  [
//   name: location
// ]

// A list of student names from our class, each with a location and
//each with a list of favorite tv shows.

// // an object.
// const profiles = {
//   name: '',
//   location: '',
//   favorite tv shows: [
//
//   ]
//   }
// }

//
// #2:


// Make an array that holds all of the colors of the rainbow.
// Write code that will access "blue" from the rainbow array.
// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
// Write code that will access your hobby from the object that you just created.

const colorsOfRainbow = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Indigo',
  'Violet'
]

console.log(colorsOfRainbow[4]); //if oyu put colorsOfRainbow.blue it says undefined.

const yourName = {
  favoriteFood: 'pizza',
  hobby: 'running',
  town: 'Austin',
  favDataType: 'Objects'
}
console.log(yourName.hobby);



// #3 - Crazy Object -

const crazyObject = {
  taco: [ //crazyObject.taco
        {
        meat: 'steak', //crazyObject.taco[0]
         cheese: ['panela', 'queso', 'chihuahua'] //crazyObject.taco[1]
        },

        {
           meat: 'chicken', //crazyObject.taco[2] b.c it's the next  //crazyObject.taco.meat[0]
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"] //taco[1].salsa[...];
          },
        ],
  larry: { //crazyObject.larry;
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"], //crayObject.larry.nicknames[];
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"], //crazyObject.larry.characters[0] is jeff [1] is occupation
    characters: [{
      name: "Jeff", //larry.characters[0]
      occupation: "manager" //larry.characters[1]
    },
    {
      name: "funkhauser",  //crazyObject.larry[1].name
      occupation: "tv dude" //crazyObject.larry[3]
    },
    {
      name: "susie",  //crazyObjects.larry[4]. name
      occupation: "jeffs wife", //crazyObjects.larry[5]
      favouriteHobby: "Swearing at Larry and Jeff" //crazyObject.larry[6]
    },
    ]
  }
}

// //Use crazy object to log the following.

// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

// "Swearing at Larry and Jeff"
console.log(crazyObject.larry[2].favouriteHobby);

// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

// The object the contains the name funkhauser
console.log(crazyObject.larry.name);

//
//
// // With the following object:
//
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
//    }
// }
// // Change the value of limbo to null.

console.log( inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = '');

//how to get null?
// '' can be null in javascript.
//165 says 'unexpected identifier'



//#5 BOND FILMS



const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];


//Yikes. Well, copy the bondFilms array of objects above into your js file. Use for loops and conditionals and methods in order to complete the below:

// Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.

const bondTitles = [];  //only the titles.
  for (i = 0; i < bondFilms.length; i++) {   //loop
    if (bondFilms[i].titles === typeof(string)) {  //conditional
      bondTitles.push(bondFilms[i].titles);  //method
    }
      console.log(bondTitles);
    }
      }
//doesnt work


//example from the internet: let small_animals = [];
// for (let i = 0; i < animals.length; i ++) {
//     if (animals[i].size === "small") {
//         small_animals.push(animals[i])
//     }
// }


//#6: Create a new array oddBonds, of only the Bond films released on odd-numbered years.


const oddBonds = [];
  for (i = 0; i < bondFilms.length; i++)
  if bondFilms.year % 2 == 0 {
    oddBonds.push(bondFilms[i].year)
    console.log(oddBonds);
  }

// if (year[3] === 1 || 3 || || 5 ||7 || 9) { //doesnt work
//   oddBonds[i] = ;
// }



//#7: Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.


//parseInt will change typeof strings to typeof numbers.

const summed = [];
for (i = 0; i < bondFilms.length; i++) {
parseInt(bondFilms.gross()) = summed[i] += summed;
console.log(summed);
}
