const container = document.querySelector('.container');
const resetButton = document.getElementById('reset-btn');

function createGrid(size) {
  container.innerHTML = '';
  container.style.setProperty('--grid-size', size);
  
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function darkenColor(color) {
  const regex = /rgb\((\d+), (\d+), (\d+)\)/;
  const [, r, g, b] = color.match(regex);
  const darkerR = Math.max(0, r - 25.5);
  const darkerG = Math.max(0, g - 25.5);
  const darkerB = Math.max(0, b - 25.5);
  return `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
}

function handleSquareHover(event) {
  const square = event.target;
  if (event.buttons === 1) {
    const currentColor = square.style.backgroundColor;
    const newColor = getRandomColor();
    square.style.backgroundColor = newColor;
    square.style.borderColor = darkenColor(newColor);
  }
}

container.addEventListener('mouseover', handleSquareHover);
container.addEventListener('mousedown', handleSquareHover);

resetButton.addEventListener('click', () => {
  let gridSize = prompt('Enter the number of squares per side (up to 100):');
  gridSize = Math.min(100, Math.max(1, parseInt(gridSize)));
  createGrid(gridSize);
});

// Initialize the grid with default size
createGrid(16);
