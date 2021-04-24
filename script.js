const cards = document.getElementsByClassName('card');
const backCards = document.getElementsByClassName('back');


let arrBackCards = Array.from(backCards);
let cardsArr = Array.from(cards);

function cardsListen() {
    cardsArr.forEach(card => {
        // card.addEventListener('click', rotateCard);
        const randomId = Math.floor(Math.random() * arrBackCards.length);

        card.style.order = randomId;
    });
}
cardsListen();