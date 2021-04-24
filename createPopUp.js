import { counterStep } from "./script.js";


const popUpWindow = document.getElementById('popup-wrapper');

function createPopUp() {
    const popUp = document.createElement('div');
    popUp.id = 'popup';
    popUp.textContent = `Вы закончили игру за ${counterStep} ходов`;
    const btn = document.createElement('button');
    btn.id = 'btn';
    btn.textContent = 'Начни сначала';
    popUpWindow.append(popUp, btn);

    // btn.addEventListener('click', restartGame);
}

export { createPopUp };