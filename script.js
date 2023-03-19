const gridDimensions = 500;
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
        document.getElementById("grid").innerHTML += "<div style='display: flex'>" + createLine() + "</div>";
    }
    function createLine() {
        let line = "";
        for (let a = 0; a < gridDensity; a++) {
            line += "<div class='pixel' style='width: " + pixelDimensions + "px; height: " + pixelDimensions + "px'></div>";
        }
        return line;
    }
}