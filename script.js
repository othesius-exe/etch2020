const container = document.getElementById('container');
const gridSize = 16;

for (i = 0; i < gridSize; i++) {
    const newRow = document.createElement('div');
    container.appendChild(newRow);
    newRow.classList.add(".row");
    for (j = 0; j < gridSize; j++) {
        const newDiv = document.createElement('div');
        newRow.appendChild(newDiv);
        newDiv.classList.add('row');
    }

}