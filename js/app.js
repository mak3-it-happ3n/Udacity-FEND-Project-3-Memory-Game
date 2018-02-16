
 // Create a list that holds all of the cards
const nodeList = document.querySelectorAll('.card');
let list = Array.from(nodeList); //turns that list into an array

// Shuffle the list of cards:
list = shuffle(list);

let count = 0; // counting moves
const deck = document.querySelector(".deck");

let openCards = [];//list of open cards
let rightCards = [];
let wrongCards = [];
let cardsLeft = 16;
let time = 0;

/* Display shuffled cards
(note: there is a problem in the function definiton */
// shuffledDeck();

//Testfunction:
for (let i = 0; i < list.length; i++) {
  console.log(list[i].innerHTML);
}

 // turning each card over :
reset();

// function to reset by removing 3 classes and set moves to 0:
function reset(){
  for (let i = 0; i < list.length; i++){
    list[i].classList.remove("match");
    list[i].classList.remove("open");
    list[i].classList.remove("show");
  };
  let moves = document.querySelector('.moves');
  moves.innerHTML = 0;
  count = 0;
  cardsLeft = 16;
};

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// display shuffled cards in new oder:
function shuffledDeck() {
  /* --->   THIS FUNCTION DOES NOT WORK CORRECTLY  <---
  (wrong result: card deck contains 3 or more of the same card) */
  for (let i = 0; i < list.length; i++){
      deck.children[i].innerHTML = list[i].innerHTML;
  };
};
/* strange: BEFORE calling shuffleDeck(), list contains correct items.
AFTER calling shuffleDecks, list contains wrong items.
Why are the items in list modified at all when their innerHTML is assigned
to deck.children[i].innerHTML? */


 //event listener for a card
deck.addEventListener('click', function(event){
  revealCard(event.target);
  addCard(event.target);
  counter();
  timer();
})

// function to reveal cards:
function revealCard(c){
  c.classList.add("open");
  c.classList.add("show");
}

// function to add revealed cards to list:
function addCard(c){
  openCards.push(c);
  //compares if cards are the same
  if(openCards.length === 2){
    let card1 = openCards[0];
    let card2 = openCards[1];
    let card1Val = card1.querySelector('i').classList.value;
    let card2Val = card2.querySelector('i').classList.value;
    if (card1Val == card2Val){
      sameCards(card1, card2);
    }
      else {
        differentCards(card1, card2);
      }
    }
  };

//perform if 2 cards are the same:
function sameCards(card1, card2){
  rightCards.push(card1);
  rightCards.push(card2);
  rightCards[0].classList.add("match");
  rightCards[1].classList.add("match");
  openCards = [];
  rightCards = [];
  remainingDeck();
};

//perform if 2 cards are different:
function differentCards(card1, card2){
  wrongCards.push(card1);
  wrongCards.push(card2);
  openCards = [];
  setTimeout(function(){
    for (let i = 0; i < wrongCards.length; i++){
      wrongCards[i].classList.remove("open");
      wrongCards[i].classList.remove("show");
    }
  }, 750);
};

//count and display moves
function counter(){
  count++;
  let moves = document.querySelector('.moves');
  moves.innerHTML = count;
  if (count === 5) {
    starRating2();
  } else if (count === 10) {
    starRating1();
  }
};

//click on refresh button
const refresh = document.querySelector('.restart');
refresh.addEventListener('click', function(){
  reset();
});

// display alert message when all cards are resolved
function remainingDeck(){
  cardsLeft-=2;
  if (cardsLeft === 0) {
    count+=1;
    let time2 = performance.now();
    let timeMS = time2 - time;
    time = Math.floor(timeMS / 1000);
    setTimeout(function(){

      /*
      window.open("congrats.html");
      let text = document.querySelector('.final');
      text.innerText = "Testomatic?!"; // not working yet
    }, 750);
    */


    setTimeout(function(){
      alert(`Congrats! You won the game with ${count} moves in ${time} seconds.`);
    }, 750)});


  }
};

function starRating2(){
  let rating = document.querySelector('.stars');
  rating.children[0].children[0].classList.remove("fa-star")
};

function starRating1(){
  let rating = document.querySelector('.stars');
  rating.children[1].children[0].classList.remove("fa-star")
};

function timer(){
  if (time === 0){
    time = performance.now();
  }
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
