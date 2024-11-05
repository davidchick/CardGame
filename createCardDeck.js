/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */

const getDeck = () => {
  const deck = [];
  const suits = ['hearts', 'spades', 'clubs', 'diamonds'];

  for (let index = 0; index < suits.length; index++) {
    
    // create an array of 13 objects
    for (let j = 1; j <= 13; j++) {

      // for each loop, push a card object to the deck

      // special cases for when j > 10
      let displayVal = '';
      let value = 0;

      switch (j) {
        case 1:
          displayVal = 'Ace';
          value = 1;
          break
        case 11:
          displayVal = 'Jack';
          value = 10;
          break
        case 12:
          displayVal = 'Queen';
          value = 10;
          break
        case 13:
          displayVal = 'King';
          value = 10;
          break
        default:
          displayVal = j;
          value = j;
      }

      const card = {
        val: value,
        displayVal: displayVal.toString(),
        suit: suits[index],
        id: `${displayVal.toString()}of${suits[index]}`
      }

      deck.push(card);

    }
  }

  return deck;

}

// CHECKS
const deck = getDeck();
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];

const cardHasVal = randomCard && randomCard.val && typeof randomCard.val === 'number';
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit = randomCard && randomCard.suit && typeof randomCard.suit === 'string';
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal = randomCard && randomCard.displayVal && typeof randomCard.displayVal === 'string';
console.log(`Random card has display value? ${cardHasDisplayVal}`);
