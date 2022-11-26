/* Imports */
import { renderSoldier } from './render.js';

/* Get DOM Elements */
const defeatedSoldiers = document.getElementById('defeated-soldiers');
const soldierArray = [];
const soldierDiv = document.getElementById('soldiers');
const submitBtn = document.getElementById('submit-button');
const nameInput = document.getElementById('soldier-name-input');
/* State */

/* Events */
submitBtn.addEventListener('click', () => {
    createSoldier(nameInput.value, 3);
    display();
});

/* Display Functions */
function display() {
    soldierDiv.textContent = '';
    for (const item of soldierArray) {
        const soldier = renderSoldier(item);
        soldierDiv.append(soldier);
    }
}

function createSoldier(name, health) {
    const newSoldier = {
        name: name,
        health: health,
    };
    soldierArray.push(newSoldier);
}

// (don't forget to call any display functions you want to run on page load!)
createSoldier('Ninjin', 3);
createSoldier('Tamanengi', 3);
createSoldier('Piiman', 3);

display();
