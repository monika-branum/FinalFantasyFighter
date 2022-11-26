export function renderSoldier(item) {
    const soldierEl = document.createElement('div');
    const soldierName = document.createElement('p');
    const soldierImg = document.createElement('img');
    const soldierHP = document.createElement('p');

    soldierName.textContent = item.name;
    soldierHP.textContent = `HP:${item.health}`;

    soldierEl.classList.add('soldier');
    soldierImg.classList.add('soldier-gif');

    soldierEl.append(soldierName, soldierImg, soldierHP);
    return soldierEl;
}
