/* Imports */
import { renderSoldier } from './render.js';

/* Get DOM Elements */
const defeatedSoldiers = document.getElementById('defeated-number');
const soldierArray = [];
const soldierDiv = document.getElementById('soldiers');
const submitBtn = document.getElementById('submit-button');
const nameInput = document.getElementById('soldier-name-input');
const zoroHp = document.getElementById('zoro-hp');
const soldiersDefeated = document.getElementById('defeated-list');
const zoroImg = document.getElementById('zoro-img');
const enemyCounter = document.getElementById('enemy-counter');
/* State */
let enemiesDefeated = 0;
let zoroHealth = 20;
/* Events */
submitBtn.addEventListener('click', () => {
    if (zoroHealth <= 0) return;
    createSoldier(nameInput.value, Math.floor(Math.random() * 5));
    display();
});

/* Display Functions */
function display() {
    soldierDiv.textContent = '';
    for (const item of soldierArray) {
        const soldier = renderSoldier(item);
        soldier.addEventListener('click', () => {
            attackHandler(item);
        });
        soldierDiv.append(soldier);
    }
    enemyCounter.textContent = `Enemies defeated: ${enemiesDefeated}`;
}

function attackHandler(soldier) {
    if (soldier.health <= 0) return;
    if (zoroHealth <= 0) return;
    if (Math.random() < 0.33) {
        soldier.health--;
        alert(soldier.name + 'Attack landed!' + soldier.name);
        if (soldier.health === 0) {
            enemiesDefeated++;
        }
    } else {
        alert('You tried to hit' + soldier.name + 'but your attack missed!');
    }
    if (Math.random() < 0.5) {
        zoroHealth--;
        alert(soldier.name + 'attacked! The attack hit you!');
    } else {
        alert(soldier.name + 'attacked! The attack missed!');
    }
    if (zoroHealth === 0) {
        zoroImg.classList.add('game-over');
        alert('GAMEOVER');
    }

    displayZoro();
    display();
}

function displayZoro() {
    zoroHp.textContent = `Zoro HP: ${zoroHealth}`;
}

function createSoldier(name, health) {
    const newSoldier = {
        name: name,
        health: health,
    };
    soldierArray.push(newSoldier);
}

// function enemyCounter {
//     if ()
// }

// (don't forget to call any display functions you want to run on page load!)
createSoldier('Ninjin', 3);
createSoldier('Tamanengi', 3);
createSoldier('Piiman', 3);

display();
displayZoro();
