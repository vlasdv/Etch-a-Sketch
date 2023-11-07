const container = document.querySelector('.container');
let gridSize = Number(document.querySelector('#grid-size').value);

function drawGrid() {
  for (let row = 0; row < gridSize; row++) {
    let newRow = document.createElement('div');
    newRow.className = 'row';
    for (let col = 0; col < gridSize; col++) {
      let newCol = document.createElement('div');
      newCol.className = 'cell';
      newRow.appendChild(newCol);
    }
    container.appendChild(newRow);
  }
}

function getRandomColor() {
  return Math.floor(Math.random()*16777215).toString(16);
}

drawGrid();