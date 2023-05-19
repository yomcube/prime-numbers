var primetable = document.getElementById("primetable");
var max = 100;
function fillTable() {
    var tableRow = document.createElement("tr");
    for (var i = 1; i <= max; i++) {
        if (i % 10 == 1 && i != 1) {
            tableRow = document.createElement("tr");
        }
        var tableCell = document.createElement("td");
        if (i % 2 == 0 && i != 2) tableCell.innerText = i;
        tableRow.appendChild(tableCell);
        primetable.appendChild(tableRow);
    }
}
fillTable();