
 // Create a list that holds all of the cards
const nodeList = document.querySelectorAll('.card');
let list = Array.from(nodeList); //turns that list into an array

// Shuffle the list of cards:
 list = shuffleOwn(list);
let preCount = 0;
let count = 0; // counting moves
const deck = document.querySelector(".deck");
document.querySelector('.timer').innerHTML = 0;
let openCards = []; //list of revealed cards
let rightCards = [];
let wrongCards = [];
let cardsLeft = 16; //list of unresolved cards
let time = 0; //seconds played since first click
let timerStatus = "off";
let stars = 3; //current star-rating

// Please see README.md for details on shuffleDeck()!
//shuffledDeck();

 // turning each card over :
reset();

// @description reset the game to starting point:
function reset(){
  for (let i = 0; i < list.length; i++){  // resetting the cards
    list[i].classList.remove("match");
    list[i].classList.remove("open");
    list[i].classList.remove("show");
  };
  let moves = document.querySelector('.moves'); // resetting the moves & timer
  moves.innerHTML = 0;
  count = 0;
  preCount = 0;
  cardsLeft = 16;
  stars = 3;
  timerStatus = "off"
  time = 0;
  document.querySelector('.timer').innerHTML = time;
  let rating = document.querySelector('.stars');  // resetting the stars
  rating.children[0].innerHTML = '<i class="fa fa-star"></i>';
  rating.children[1].innerHTML = '<i class="fa fa-star"></i>';
  rating.children[2].innerHTML = '<i class="fa fa-star"></i>';
}

// @description my own shuffle function:
function shuffleOwn(arr) {
  let arrNew = [];
  for (let itemsLeft = arr.length; itemsLeft > 0; itemsLeft--) {
    let rndNum = Math.floor(Math.random() * (arr.length - 0) + 0);
    arrNew.push(arr[rndNum]);
    arr.splice(rndNum, 1);
  }
   return arrNew;
}

// @description display shuffled cards in new oder:
function shuffledDeck() {
  for (let i = 0; i < list.length; i++){
      deck.children[i].innerHTML = list[i].innerHTML;
  };
}

 //event listener for a card
deck.addEventListener('click', function(event){
  alert("Please refer to README.md for a detailed description of the problem. I need help with this and the last reviewer completely ignored it, pretending everything works fine. Thank you!");
  if (timerStatus === "off") {
    timerStatus = "on";
    timer();
  }
  revealCard(event.target);
  addCard(event.target);
})

// @description reveal cards:
function revealCard(c){
  c.classList.add("open");
  c.classList.add("show");
}

// @description add revealed cards to list:
function addCard(c){
  if (openCards[0] == c || openCards[1] == c) {
    return;
  }
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
      counter();
  }

//@description perform if 2 cards are the same:
function sameCards(card1, card2){
  rightCards.push(card1);
  rightCards.push(card2);
  rightCards[0].classList.add("match");
  rightCards[1].classList.add("match");
  openCards = [];
  rightCards = [];
  remainingDeck();
}

//@description perform if 2 cards are different:
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
}

//@description count and display moves
function counter(){
  preCount++;
  if (preCount === 2) {
    preCount = 0;
    count++;
    let moves = document.querySelector('.moves');
    moves.innerHTML = count;
    if (count === 10) {
      starRating2();
    } else if (count === 13) {
      starRating1();
    }
  }
}

//click on refresh button
const refresh = document.querySelector('.restart');
refresh.addEventListener('click', function(){
  reset();
});

//@description checking how many cards are left; if none: message
function remainingDeck(){
  cardsLeft-=2;
  if (cardsLeft === 0) {
    alert(`Congrats! You won the game with ${count} moves in ${time} seconds!
    That's a ${stars}-star rating!
    Do you want to play again?`);
    reset();
  }
}

//@description reducing starts from 3 to 2
function starRating2(){
  let rating = document.querySelector('.stars');
  rating.children[0].children[0].classList.remove("fa-star");
  stars = 2;
}

//@description reducing stars from 2 to 1
function starRating1(){
  let rating = document.querySelector('.stars');
  rating.children[1].children[0].classList.remove("fa-star")
  stars = 1;
}

//@description start timer if it's not already running
function timer() {
    if (time === 0) {
      setInterval(function(){   // sets time
        if (timerStatus === "on") {
          time += 1;
        } else {
          return;
        }
      }, 1000);
      setInterval(function(){
        if (timerStatus === "on") {
          document.querySelector('.timer').innerHTML = time;
        } else {
          return;commanccsadsfdsdf
        }
      }, 1000);
    }
}
