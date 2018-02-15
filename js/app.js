
 // Create a list that holds all of your cards
const nodeList = document.querySelectorAll('.card');
const list = Array.from(nodeList);

 // Shuffle the cards:
shuffle(list);

 // turning each card over by removing 3 classes:
for (i = 0; i < list.length; i++){
  list[i].classList.remove("match");
  list[i].classList.remove("open");
  list[i].classList.remove("show");
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

 //event listener for a card
const deck = document.querySelector(".deck");
deck.addEventListener('click', function(event){
  revealCard(event.target);
  addCard(event.target);
})

let openCards = [];//list of open cards


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
    let card1 = openCards[0].children.className;
    let card2 = openCards[1].children.className;
    if (card1 == card2) {
      console.log("The same!");
    } else {
    console.log("not the same");
    };
  };

/*

console.log(c.children);

  };
*/

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
