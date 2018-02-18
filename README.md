# Current Problems:
## Shuffling:
The process of assigning the cards shuffled values does not work correctly
and hinders the games workflow. The function `shuffledDeck()` is therefore currently deactivated.

To activate the function, simply uncomment the function call
`//shuffledDeck() `on line 21.
This will result in a strange mix of some **card values being assigned
3, 4 or even 5 times with others missing completely**. As a result, the game cannot
be finished with the function `shuffledDeck()` active (hence why it is paused).

**The following has been done to find/solve the issue:**

  - before calling shuffledDeck, this **test-function** was used to log all items of
  list:

`for (let i = 0; i < list.length; i++) {
   console.log("index " + i +": " + list[i].innerHTML); };
  console.log(list[0].innerHTML);`

This works fine, each item is in the list twice and the first item logged (index 0) is the same as the additional one logged at the bottom via the additional `console.log(list[0].innerHTML)`, which makes perfect sense.

However, if I now enter `list[0].innerHTML` in the console **manually**, i am shown **a DIFFERENT item** than what was logged as item 0 above - I can't understand why.

The real problem then starts with my way of assigning the (correctly logged) list to the HTML elements. I use:

`const deck = document.querySelector(".deck");
 for (let i = 0; i < list.length; i++) {
   deck.children[i].innerHTML = list[i].innerHTML;
  };`

My understanding was that this for loop would:

- start with `deck.children[0]` and assign its innerHTML to that of `list[0].innerHTML` and continue doing that for all 16 elements.

**IF** the items in list _were stored the way they were logged on the screen with the test function before_, then all 16 items should be assigned to all 16 HTML element's innerHTML, causing no duplicates (other than the intended 2 occurances of each card of course).

But **instead**, the result is a strange mix of some items being assigned 3, 4 or even 5 times with others missing completely. I assume this is connected with the strange behavior of the items in list i observed with the test function. I am really stuck here.

To sum it up, all **I want to do is:**

- **grab** all elements with class card in a list (_works fine_)
- **shuffle** those elements (_works when i console log the results, but behaves strangly_ when manually console-logging items afterwards)
- **assign** the shuffled elements one by one to the deck HTML-elements on the page one by one (_doesn't work correctly_).

## timer
The timer works fine _most of the time_, however in some instances it counts too
quickly. I tried to resolve the issue by **including restrictive checks** on whether
or not the timer should run at all, but this didn't resolve the issue. The timer
 counting too quickly becomes **especially obvious when clicking on restart**.




# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
