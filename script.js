let gridDimensions;
let paintEnable;
const slider = document.getElementById("densityRange");
const gridDensityDisplayer = document.getElementById("gridDensity");
const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");
const eraserButton = document.getElementById("eraser");
const clearButton = document.getElementById("clear")
let paintColor = "#000000";
setGridDimensions();
function setGridDimensions() {
    if (window.innerWidth > 550 && window.innerHeight > 550) {
        gridDimensions = 500;
    } else if (window.innerWidth < window.innerHeight){
        gridDimensions = window.innerWidth * 0.9;
    } else {
        gridDimensions = window.innerHeight * 0.9;
    }
}

gridDensityDisplayer.innerHTML = slider.value;
colorPicker.oninput = function() {
    paintColor = this.value;
}
eraserButton.onclick = function() {
    paintColor = "#FFFFFF";
}
clearButton.onclick = function() {
    createGrid();
}
slider.oninput = function() {
    gridDensityDisplayer.innerHTML = this.value;
    gridDensity = this.value;
    pixelDimensions = (gridDimensions / gridDensity);
    createGrid();
}
let gridDensity = slider.value; 
let pixelDimensions = (gridDimensions / gridDensity);
createGrid();
grid.addEventListener('mousedown', enablePaint);
grid.addEventListener('mouseup', disablePaint);

function enablePaint() {
    paintEnable = true;
}
function disablePaint() {
    paintEnable = false;
}
function createGrid() {
    grid.innerHTML = "";
    for (let i = 0; i < gridDensity; i++) {
        grid.innerHTML += "<div style='display: flex'>" + createLine(i) + "</div>";
    }
    function createLine(y) {
        let line = "";
        for (let x = 0; x < gridDensity; x++) {
            line += "<div class='pixel' id='" + x + "-" + y + "' onmouseover='paintPixel(" + x + "," + y +  ")' ' style='background-color: white; width: " + pixelDimensions + "px; height: " + pixelDimensions + "px'></div>";
        }
        return line;
    }
}
function paintPixel(x, y) {
    if (paintEnable) {
        document.getElementById(x + "-" + y).style.setProperty('background-color', paintColor);
    }
}