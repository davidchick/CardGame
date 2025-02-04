
const cardDeck = getDeck();

const drawnCards = [];

const suitCodes = {
    spades: '\u2660',
    hearts: '\u2665',
    clubs: '\u2663',
    diamonds: '\u2666'
};

class CardPlayer {
    constructor (name) {
     this.name = name;
     this.hand = [];
    };
 
    drawACard() {
     const {hand} = this;
         hand.push(drawACard());
     };
 };
 
 // // CREATE TWO NEW CardPlayers
 
 const player1 = new CardPlayer('Buddy');
 const player2 = new CardPlayer('Ree');
 

const renderCard = function(card) {

    const divEl = document.createElement("div");

    const divTextNode = document.createTextNode(`${card.displayVal}`);
    divEl.appendChild(divTextNode);

    const brEl = document.createElement("br");
    divEl.appendChild(brEl);

    const divText2Node = document.createTextNode(`${suitCodes[card.suit]}`);
    divEl.appendChild(divText2Node);

    divEl.id = "rcorners2";

    if (card.suit === 'hearts' || card.suit === 'diamonds') {
        divEl.style.color = 'red';
    }

    const body = document.getElementsByTagName('body')[0];
    body.appendChild(divEl);

}

const renderHTML = function(tag, text) {

    const pEl = document.createElement(tag);
    
    if (text) {
        const pTextNode = document.createTextNode(text);
        pEl.appendChild(pTextNode);
    }

    const body = document.getElementsByTagName('body')[0];
    body.appendChild(pEl);

}

const drawACard = function() {
    
    let cardNumber = Math.floor(Math.random() * 52);

    let counter = 0;

    while (drawnCards[cardNumber] && counter < 1000) {

        cardNumber = Math.floor(Math.random() * 52);

        counter++;

        console.log(`${counter}: ${cardNumber}`);

    }

    drawnCards[cardNumber] = true;

    return cardDeck[cardNumber];

}

renderHTML('h1', `${player1.name}'s hand`);

for (let i = 0; i < 6; i++) {

    player1.drawACard();
    renderCard(player1.hand[i]);

}

renderHTML('h1', `${player2.name}'s hand`);

for (let i = 0; i < 6; i++) {

    player2.drawACard();
    renderCard(player2.hand[i]);

}