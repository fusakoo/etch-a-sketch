// Declare variables
const cellContainer = document.querySelector('#cell-container');
const resize = document.querySelector('#resize');
const reset = document.querySelector('#reset');
let defaultGrid = 16;

function setCanvasSize() {
    let resize = prompt('Please enter the number you\'d like the side of square to be: ', 'default: 16');
    createCanvas(size,size);
}

// Create the canvas
function createCanvas(rows, cols) {
    // Set number of rows
    cellContainer.style.setProperty('--grid-rows', rows);
    // Set number of columns
    cellContainer.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        cellContainer.appendChild(cell).className = "cell-item";
    };
};

function drawCanvas() {
    const cells = document.querySelectorAll('.cell-item');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('fill');
        });
    });
}

window.onload = createCanvas(defaultGrid, defaultGrid);
drawCanvas();