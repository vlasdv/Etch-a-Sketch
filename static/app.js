const container = document.querySelector('.container');
const gridLabel = document.querySelector('#grid-label');
const gridInput = document.querySelector('#grid-size');

document.addEventListener('DOMContentLoaded', () => {
  drawGrid(Number(gridInput.value));
  gridInput.addEventListener('input', () => {
    gridLabel.textContent = gridInput.value;
    drawGrid(Number(gridInput.value));
  });
});

function drawGrid(gridSize) {  
  container.replaceChildren();  
  for (let row = 0; row < gridSize; row++) {
    let newRow = document.createElement('div');
    newRow.className = 'row';
    for (let col = 0; col < gridSize; col++) {
      let newCol = document.createElement('div');
      newCol.className = 'cell';
      newCol.addEventListener('mouseover', () => {
        newCol.style.backgroundColor = getRandomColor();        
      });
      newRow.appendChild(newCol);
    }    
    container.appendChild(newRow);
  }
}

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}