import { nullify, cardsShuffle, cardsArr, rotateCard } from "./script.js";

function restartGame() {
    nullify();
    removeCards();
    cardsShuffle();
    deletePopUp();
}

function removeCards() {
    cardsArr.forEach(card => {
        card.removeEventListener('click', rotateCard);
        card.classList.remove('none');
        card.classList.remove('rotate')
    });
}

function deletePopUp() {
    const popUpDelete = document.getElementById('popup');
    popUpDelete.remove();
    const btnDelete = document.getElementById('btn');
    btnDelete.remove();
}

export {
    restartGame
};