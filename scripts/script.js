// Declare variables
const container = document.querySelector('#container');
const resize = document.querySelector('#resize');
const reset = document.querySelector('#reset');

// Declare default color
let color = 'black';

const black = document.querySelector('#black');
black.addEventListener('click', (e) => {
    color ='black'
});

const monochromatic = document.querySelector('#monochromatic');
monochromatic.addEventListener('click', (e) => {
    color ='monochromatic'
});

const random = document.querySelector('#random');
random.addEventListener('click', (e) => {
    color ='random'
});

const erase = document.querySelector('#erase');
erase.addEventListener('click', (e) => {
    color ='erase'
});

const custom = document.querySelector('#custom');
custom.addEventListener('change', (e) => {
    color = 'custom';
});

// Add event listeners to buttons/options
resize.addEventListener('change', resetCanvas);
reset.addEventListener('click', resetCanvas);

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

function getRandomColor() {
    const random = () => Math.floor(Math.random() * 256);
    return `rgb(${random()}, ${random()}, ${random()})`;
}

// Draw on the canvas
function drawCanvas() {
    const cells = document.querySelectorAll('.cell-item');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            switch (color) {
                case 'black':
                    e.target.style.backgroundColor = 'rgb(0,0,0)';
                    break;
                // Aug 17 2020 Issue: Mono keep on overwriting 'black' & Black cannot override mono
                case 'monochromatic':
                    let opacity = Number(cell.style.opacity);
                    if (opacity < 1) {
                        cell.style.opacity = opacity + 0.1;
                    }
                    e.target.style.backgroundColor = `rgba(0,0,0,${opacity})`;
                    break;
                case 'random':
                    e.target.style.backgroundColor = getRandomColor();
                    break;
                case 'erase':
                    e.target.style.backgroundColor = null;
                    break;
                case 'custom':
                    e.target.style.backgroundColor = `${custom.value}`;
                    break;
            };
        });
    });
}

// Resets the canvas
function resetCanvas() {
    // const cells = document.querySelectorAll('.cell-item');
    // cells.forEach(cell => {
    //     cell.classList.remove('fill');
    // });
    createCanvas(resize.value, resize.value);
    drawCanvas();
}

// Run function
resetCanvas();