function renderSoldier() {
    const soldierEl = document.createElement('div');
    const soldierName = document.createElement('p');
    const soldierImg = document.createElement('img');
    const soldierHP = document.createElement('p');

    soldierEl.classList.add('soldier');
    soldierImg.classList.add('soldier-gif');

    soldierEl.append(soldierName, soldierImg, soldierHP);
    return soldierEl;
}
