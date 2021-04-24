import { createPopUp } from "./createPopUp.js";

const cards = document.getElementsByClassName('card');
const backCards = document.getElementsByClassName('back');


let arrBackCards = Array.from(backCards);
let cardsArr = Array.from(cards);

let ifFlippedCard = false;
let lock = false;

let firstCard = null;
let secondCard = null;

let counterStep = 0;
let counterCouple = 0;

function cardsShuffle() {
    cardsArr.forEach(card => {
        card.addEventListener('click', rotateCard);
        const randomId = Math.floor(Math.random() * arrBackCards.length);

        card.style.order = randomId;
    });
}
cardsShuffle();

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

function checkCards() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        counterCouple++;
        counterStep++;

        setTimeout(() => {
            firstCard.classList.add('none');
            secondCard.classList.add('none');
            firstCard.removeEventListener('click', rotateCard);
            secondCard.removeEventListener('click', rotateCard);
            lock = false;
            checkWin();
        }, 1000);

    } else {
        lock = true;
        counterStep++;

        setTimeout(() => {
            firstCard.classList.remove('rotate');
            secondCard.classList.remove('rotate');
            firstCard.addEventListener('click', rotateCard);
            firstCard = secondCard = null;
            lock = false;
        }, 1000)
    }
}

function checkWin() {
    if (counterCouple === 16) {
        cardsArr.forEach(card => { card.classList.remove('none') });
        createPopUp();
    } else {
        return;
    }
}

function nullify() {
    ifFlippedCard = lock = false;
    firstCard = secondCard = null;
    counterCouple = counterStep = 0;
}

export {
    counterStep,
    cardsArr,
    cardsShuffle,
    rotateCard,
    nullify
}