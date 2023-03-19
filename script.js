let gridSize = prompt("Select grid size");
createGrid();

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        document.getElementById("grid").innerHTML += "<div style='display: flex'>" + createLine() + "</div>";
    }
    function createLine() {
        let line = "";
        for (let a = 0; a < gridSize; a++) {
            line += "<div class='pixel' style='width: 20px; height: 20px'></div>";
        }
        return line;
    }
}