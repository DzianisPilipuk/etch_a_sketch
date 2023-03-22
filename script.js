let gridDimensions;
let paintEnable;
const slider = document.getElementById("densityRange");
const gridDensityDisplayer = document.getElementById("gridDensity");
const grid = document.getElementById("grid");
const canvas = document.getElementById("canvas")
const colorPicker = document.getElementById("colorPicker");
const pencilButton = document.getElementById("pencil");
const eraserButton = document.getElementById("eraser");
const clearButton = document.getElementById("clear");
let paintColor = "#000000";

setGridDimensions();
gridDensityDisplayer.textContent = slider.value;
let gridDensity = slider.value; 
let pixelDimensions = (gridDimensions / gridDensity);
createGrid();
canvas.addEventListener('mousedown', enablePaint);
canvas.addEventListener('mouseup', disablePaint);

colorPicker.oninput = function() {
    paintColor = this.value;
}
pencilButton.onclick = function() {
    paintColor = colorPicker.value;
    pencilButton.style.setProperty('border-style', 'solid')
    eraserButton.style.setProperty('border-style', 'none')
}
eraserButton.onclick = function() {
    paintColor = "#FFFFFF";
    eraserButton.style.setProperty('border-style', 'solid')
    pencilButton.style.setProperty('border-style', 'none')
}
clearButton.onclick = function() {
    createGrid();
}
slider.oninput = function() {
    gridDensityDisplayer.textContent = this.value;
    gridDensity = this.value;
    pixelDimensions = (gridDimensions / gridDensity);
    createGrid();
}

function enablePaint() {
    paintEnable = true;
}
function disablePaint() {
    paintEnable = false;
}
function setGridDimensions() {
    if (window.innerWidth > 550 && window.innerHeight > 550) {
        gridDimensions = 500;
    } else if (window.innerWidth < window.innerHeight){
        gridDimensions = window.innerWidth * 0.9;
    } else {
        gridDimensions = window.innerHeight * 0.9;
    }
}
function createGrid() {
    paintColor = colorPicker.value;
    pencilButton.style.setProperty('border-style', 'solid')
    eraserButton.style.setProperty('border-style', 'none')
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    for (let i = 0; i < gridDensity; i++) {
        const line = document.createElement('div');
        line.setAttribute('id', 'line');
        line.style.display = 'flex';
        grid.appendChild(line);
    }
    const lines = document.querySelectorAll('#line')
    lines.forEach(element => {
        for (let i = 0; i < gridDensity; i++) {
            const pixel = document.createElement('div');
            element.appendChild(pixel);
            pixel.style.width = pixelDimensions + 'px';
            pixel.style.height = pixelDimensions + 'px';
            pixel.style.backgroundColor = '#FFFFFF';
            pixel.className = "pixel";
            pixel.addEventListener('mouseover', (e) => {
                if (paintEnable) {
                    e.target.style.setProperty('background-color', paintColor);
                }
            })
        }
    })
}