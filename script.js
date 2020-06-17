const container = document.getElementById('container');
const gridSize = 16;
let currentDivId = gridSize * gridSize;

for (i = 0; i < gridSize; i++) {
    const newRow = document.createElement('div');
    container.appendChild(newRow);
    newRow.classList.add(".rowItem");
    for (j = 0; j < gridSize; j++) {
        const newDiv = document.createElement('div');
        newRow.appendChild(newDiv);
        newDiv.classList.add('rowItem');
        newDiv.setAttribute("id", `${currentDivId}`);
        currentDivId--;
        console.log(currentDivId);
    }
}

const divToColor = document.querySelectorAll('div');

divToColor.forEach((div)  => {
    div.addEventListener('mouseover', (e) =>
    div.classList.toggle('etchedItem'));
})