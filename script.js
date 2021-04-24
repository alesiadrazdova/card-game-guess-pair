const cards = document.getElementsByClassName('card');
const backCards = document.getElementsByClassName('back');


let arrBackCards = Array.from(backCards);
let cardsArr = Array.from(cards);

let ifFlippedCard = false;
let lock = false;

let firstCard = null;
let secondCard = null;

function cardsListen() {
    cardsArr.forEach(card => {
        card.addEventListener('click', rotateCard);
        const randomId = Math.floor(Math.random() * arrBackCards.length);

        card.style.order = randomId;
    });
}
cardsListen();

function rotateCard(e) {
    this.addEventListener('click', rotateCard);

    if (lock === true) {
        return;
    }
    this.classList.add('rotate');

    if (ifFlippedCard === false) {
        ifFlippedCard = true;
        firstCard = this;
        firstCard.removeEventListener('click', rotateCard);
    } else {
        ifFlippedCard = false;
        secondCard = this;
        lock = true;
        checkCards();
    }
}