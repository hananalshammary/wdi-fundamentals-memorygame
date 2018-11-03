var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}

}

function flipCard (cardId) {

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen" + cardsOne);

console.log("User flipped queen" + cards[0]);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
console.log("User flipped queen" + cards[2]);


cards[cardId].push(cardsInPlay);
flipCard(0);
flipCard(2);
checkForMatch ();

}

console.log("User flipped " + cards[0]);
console.log("User flipped " + cards[2]);


if (cardsInPlay[0] == cardsInPlay) {
	alert("You found a match!");
}
else {
		alert("Sorry, try again.");
}

