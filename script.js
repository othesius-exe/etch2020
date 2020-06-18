const container = document.getElementById('container');
let gridSize = 16;
let currentDivId = gridSize * gridSize;

for (i = 0; i < gridSize; i++) {
    const newRow = document.createElement('div');
    container.appendChild(newRow);
    newRow.classList.add("rowContainer");
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
const removeDiv = document.querySelectorAll('div');

divToColor.forEach((div)  => {
    if(div.classList.contains('rowItem')) {
        div.addEventListener('mouseover', (e) =>
        div.classList.add('etchedItem'));
    }
})

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', (e) => {
    console.log(e);
    clearGrid();
    gridSize = prompt('Pick a new grid square', 16)

    if (isNaN(gridSize) || gridSize == '') {
        gridSize = 16;
        createGrid(gridSize);
    } else {
        createGrid(gridSize);
    }
})

function createGrid(square) {
    const container = document.getElementById('container');
    let gridSquare = square;
    let currentDivId = square * square;

    for (i = 0; i < gridSquare; i++) {
        const newRow = document.createElement('div');
        container.appendChild(newRow);
        newRow.classList.add('rowContainer');
        for (j = 0; j < gridSquare; j++) {
            const newDiv = document.createElement('div');
            newRow.appendChild(newDiv);
            newDiv.classList.add('rowItem');
            newDiv.setAttribute("id", `${currentDivId}`);
            currentDivId--;
            console.log(currentDivId);
        }
    }

    const divToColor = document.querySelectorAll('div');
    const removeDiv = document.querySelectorAll('div');

    divToColor.forEach((div)  => {
    if(div.classList.contains('rowItem')) {
        div.addEventListener('mouseover', (e) =>
        div.classList.add('etchedItem'));
    }
})
}

function clearGrid() {
    const container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}