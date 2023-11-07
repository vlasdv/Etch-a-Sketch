const container = document.querySelector('.container');
const gridLabel = document.querySelector('#grid-label');
const gridInput = document.querySelector('#grid-size');
const buttons = document.querySelector('.buttons');
const clearButton = document.querySelector('#clear');

document.addEventListener('DOMContentLoaded', () => {
  setSizes();
  drawGrid(Number(gridInput.value));
  
  gridInput.addEventListener('input', () => {
    gridLabel.textContent = gridInput.value;    
    drawGrid(Number(gridInput.value));
  });
  
  clearButton.addEventListener('click', () => {
    drawGrid(Number(gridInput.value));
  });  

  addEventListener('resize', () => {
    setSizes();
  });
});

// set correct size for container and controls block
function setSizes() {
  if (window.innerWidth > window.innerHeight) {
    container.style.height = '80vh';
    container.style.width = '80vh';
    buttons.style.width = '80vh';
  } else {
    container.style.height = '80vw';
    container.style.width = '80vw';
    buttons.style.width = '80vw';
  }
}

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