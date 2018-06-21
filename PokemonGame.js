// You are going to create a simple card game in which a player will be able to battle the autoplayer. The game will keep an array of cards and will deal 3 as the autoplayer to "fight" against the three that you play. Each of your cards will have some values associated with it. You will have to compare the value of your card to the computer's card to see which one wins.
//
// Inside your folder for today, create a folder called pokemon_card_app_lab_ with our file structure.
//
// Object Oriented Programming
// For this lab, we're going to continue using objects, giving them data and behaviors (methods). They will interact with one another to make our game work!
//


//CARDS YOU HAVE

const cardArray = [{
  name: "Bulbasaur",
  damage: 60
}, {
  name: "Caterpie",
  damage: 40
}, {
  name: "Charmander",
  damage: 60
}, {
  name: "Clefairy",
  damage: 50
}, {
  name: "Jigglypuff",
  damage: 60
}, {
  name: "Mankey",
  damage: 30
}, {
  name: "Meowth",
  damage: 60
}, {
  name: "Nidoran - female",
  damage: 60
}, {
  name: "Nidoran - male",
  damage: 50
}, {
  name: "Oddish",
  damage: 40
}, {
  name: "Pidgey",
  damage: 50
}, {
  name: "Pikachu",
  damage: 50
}, {
  name: "Poliwag",
  damage: 50
}, {
  name: "Psyduck",
  damage: 60
}, {
  name: "Rattata",
  damage: 30
}, {
  name: "Squirtle",
  damage: 60
}, {
  name: "Vulpix",
  damage: 50
}, {
  name: "Weedle",
  damage: 40
}]

//GAME OBJECT  ^^^^^^^^^^^
// keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)
// know what cards have been played
// know how many cards are left to be played overall
// track points for both the player and the computer Note: Points are determine by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.
// track rounds
// track number of rounds won for both player and computer
// automatically deal 3 cards from the library to the player and 3 cards to the computer each round
// determine the winner of each play
// stop once there are no cards left or not enough to deal 3 to each the player and computer

//keep a library of all the Pokemon cards. get .name ?




//PLAYER OBJECT
// see what cards they have been dealt by the game that round. //parameter: card
// see their stats: their points and how many rounds they've won.  //parameter: points

// pick a card from the hand that has been dealt to them. Play this card agaist the computer's card. Do this again (3 times total) until the round end.
// recieive new cards given to them by the game each round.
// see the cards that they have played in the past.


//if you had multiple players.
// class Player{
//   constructor(name, card, points, roundsWon, isComputer) {
//   this.name = name;
//   this.card = card;
//   this.points = points;
//   this.roundWon = roundsWon;
//   this.isComputer = isComputer;
// }
// }
//
// // const player1 = new Player(timbo, ) etc.



//YOU ONLY HAVE TWO PLAYERS SO MAKE TWO objects

//PLAYER OBJECT

const player = { //parent object #1 is player1
  name: "Timbo",
  score: 0,
  numberOfCardsInHand: 0, //you start with 0 so you can increment.
  cardsInDeck: [], //splits the 18 deck into 9. you will decrement this?
  cardsInHand: [], //this needs to be 3. the actual cards you have in your hand.
  isPlayer: true,
}

//COMPUTER OBJECT
const computer = { //parent object #1 is player1
  name: "Tobor",
  score: 0,
  numberOfCardsInHand: 0, //you start with 0 so you can increment.
  cardsInDeck: [], //splits the 18 deck into 9. you will decrement this?
  cardsInHand: [], //this needs to be 3. the actual cards you have in your hand.
  isPlayer: false,
}


//STEP 1: Shuffle with a randomizer.
//STEP 2: Deal out the cards where the player has 9 and the computer has 9.

//FUNCTION that randomizes cards.
const dealDecks = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const randomCard = Math.floor(Math.random() * ((cardArray.length - 1) + 1));
    console.log(randomCard);
if (player.isPlayer) {  //if player is true.
  player.cardsInDeck.push(cardArray[randomCard])  //gets the cardsInDeck array for player. .push from cardArray. You randomized the cards, like shuffling them, which randomized the array. You still have to go back to that array.
//.push(cardArray) would only access the whole deck. [randomCard] is the const array that has been shuffled.
//basically cardArray is a deck in order.
//randomCard array is the deck shuffled, one by one. So you get one card. If the player is true you get one card.
player.isPlayer = false; //now after that one card player is being read as false.
}
 else {
   computer.cardsInDeck.push(cardArray[randomCard])
   player.isPlayer = true
 }
}
}

// dealDecks(); //calls the function. you can now call this from the console.
(dealDecks()); //calls the function in the log directly.

//now how do you take a card out of each array.

//STEP 3: FIGHT
// The game will keep an array of cards and will deal 3 as the autoplayer to "fight" against the three that you play. Each of your cards will have some values associated with it. You will have to compare the value of your card to the computer's card to see which one wins.

// track points for both the player and the computer Note: Points are determine by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.


//Best attempt at putting 3 cards into each players hands.

//increment to cardsInHand.

//push 3 cards into the empty arrays.
const play = () => {
  if player.cardsInHand <= 3 {
  cardsFightPlayer.push();
}
  if (computer.cardsInHand) <= 3 {
  cardsFightComputer.push)()
  }
}

//function to have the computer play against the person.
const fight = () => {
for (i = 0; i < cardsInHand.length; i++) {
  if (cardsInHand.length == computer.cardsInHand) {
if (cardsFightPlayer.damage[i] > cardsFightComputer.damage[i]) {
  return player.score++;
} else if (computer.cardArray.damage[i] > player.cardArray.damage[i]) {
  return computer.score++;
} //note: do not need an else if { else } statement b.c if there's a tie nothing happens.
}
}
}
fight();




// ---------------------------//MATH.RANDOM EXPLANATION----------------------------

//Math.floor is constantly bringing everything down one integer.
//Math.random() is randomizing things.
//cardArray.length is what you're randomizing from.
//-1 is taking a card out of each loop. so cardArray has 18. it's going down to 17. then the next iteration to 16.
//+1 is bringing the total back up to 18. then to 17. This makes sure you can include the 18th card.

// Math.floor(Math.random() * (max - min +1)); but this is length max  - 1 min. since you're only going to use 1 card.
// you don't need max - min and then + 1. +1 was a way to jump up 1, like to increment?
//max is the cardArray.length -1 + 1. you don't have to have a minimum.



// const human {
//   sayName() { //problem is here?
//     window.prompt("what's your name?");
//   }
// };
// console.log(human.sayName());




//method is attached to an object.
//function stands alone
