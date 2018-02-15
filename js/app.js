
 // Create a list that holds all of your cards
const nodeList = document.querySelectorAll('.card');
let list = Array.from(nodeList);

let count = 0;

/////////////////Not working yet:
 // Shuffle the cards:
list = shuffle(list);

 // turning each card over by removing 3 classes:
function reset(){
  for (i = 0; i < list.length; i++){
    list[i].classList.remove("match");
    list[i].classList.remove("open");
    list[i].classList.remove("show");
    let moves = document.querySelector('.moves');
    moves.innerHTML = 0;
    count = 0;
  };
};

reset();

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

 //event listener for a card
const deck = document.querySelector(".deck");
deck.addEventListener('click', function(event){
  revealCard(event.target);
  addCard(event.target);
  counter();
})

let openCards = [];//list of open cards
let rightCards = [];
let wrongCards = [];


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

function sameCards(card1, card2){
rightCards.push(card1);
rightCards.push(card2);
rightCards[0].classList.add("match");
rightCards[1].classList.add("match");
openCards = [];
rightCards = [];
}

function differentCards(card1, card2){
  wrongCards.push(card1);
  wrongCards.push(card2);
  openCards = [];
  setTimeout(function(){
    for (i = 0; i < wrongCards.length; i++){
      wrongCards[i].classList.remove("open");
      wrongCards[i].classList.remove("show");
    }
  }, 750);
};

function counter(){
  count++;
  let moves = document.querySelector('.moves');
  moves.innerHTML = count;
};

const refresh = document.querySelector('.restart');
refresh.addEventListener('click', function(){
  reset();
});


  /*
  setTimeout(function(){
    for (i = 0; i < list.length; i++){
      wrongCards[i].classList.remove("open");
      wrongCards[i].classList.remove("show");
    }
  }, 750);
}
*/


/*
setTimeout(function(){
  for (i = 0; i < list.length; i++){
    list[i].classList.remove("open");
    list[i].classList.remove("show");
  }
}, 750);
}
*/

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
