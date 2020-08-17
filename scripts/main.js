// Declare variables
const container = document.querySelector('#container');
const resize = document.querySelector('#resize');
const reset = document.querySelector('#reset');

const random = document.querySelector('#random');
const black = document.querySelector('#black');

// Add event listeners to buttons/options
resize.addEventListener('change', resetCanvas);
reset.addEventListener('click', resetCanvas);

//random.addEventListener('click', changeColorRandom);
//black.addEventListener('click', changeColorBlack);

// Create the canvas
function createCanvas(rows, cols) {
    container.textContent = '';
    // Set number of rows
    container.style.setProperty('--grid-rows', rows);
    // Set number of columns
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "cell-item";
    };
};

// Draw (fill a cell) on the canvas
function drawCanvas() {
    const cells = document.querySelectorAll('.cell-item');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('fill');
        });
    });
}

// Resets the canvas
function resetCanvas() {
    const cells = document.querySelectorAll('.cell-item');
    cells.forEach(cell => {
        cell.classList.remove('fill');
    });
    createCanvas(resize.value, resize.value)
    drawCanvas();
}

function getRandomColor() {
    const random = () => Math.floor(Math.random() * 256);
    return `rgb(${random()}, ${random()}, ${random()})`;
}

// Run function
resetCanvas();