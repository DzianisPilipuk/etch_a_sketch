let gridDimensions;
let paintEnable;
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
let gridDensity; 
getDensity();
let pixelDimensions = (gridDimensions / gridDensity);
createGrid();

function getDensity() {
    do { 
        gridDensity = prompt("Select grid density, min 16 max 100");
    } while ( gridDensity < 16 || gridDensity > 100);
}
function createGrid() {
    for (let i = 0; i < gridDensity; i++) {
        document.getElementById("grid").innerHTML += "<div style='display: flex'>" + createLine(i) + "</div>";
    }
    function createLine(y) {
        let line = "";
        for (let x = 0; x < gridDensity; x++) {
            line += "<div class='pixel' id='" + x + "-" + y + "' onmouseover='paintPixel(" + x + "," + y + ")' touchstart='paintPixelMobile(" + x + "," + y + ")' style='background-color: white; width: " + pixelDimensions + "px; height: " + pixelDimensions + "px'></div>";
        }
        return line;
    }
}
function paintPixel(x, y) {
    if (paintEnable) {
        document.getElementById(x + "-" + y).style.setProperty('background-color', 'black');
    }
}
function paintPixelMobile(x, y) {
        document.getElementById(x + "-" + y).style.setProperty('background-color', 'black');
}
function paintGrid(n) {
    paintEnable = n;
}