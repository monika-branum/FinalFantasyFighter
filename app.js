/* Imports */
import {renderSoldier} from('./render.js')

/* Get DOM Elements */
const defeatedSoldiers = document.getElementById('defeated-soldiers');
const soldierArray = [];
const soldierDiv = document.querySelector('soldier');
/* State */

/* Events */

/* Display Functions */
function display {
    soldierDiv.textContent = '';
        for (const item of soldierArray){
            const soldier = renderSoldier(item);

            
        }

}

function createSoldiers (name, health){
    const newSoldier = {
        name : name,
        health : health
    }
    soldierArray.append(newSoldier);
}
// (don't forget to call any display functions you want to run on page load!)
