var primetable = document.getElementById("primetable");
var max = 1000;
function fillTable() {
    var tableRow = document.createElement("tr");
    for (var i = 1; i <= max; i++) {
        if (i % 10 == 1 && i != 1) {
            tableRow = document.createElement("tr");
        }
        var tableCell = document.createElement("td");
        tableCell.innerText = i;
        tableCell.id = i;
        tableRow.appendChild(tableCell);
        primetable.appendChild(tableRow);
    }
}
function markComposites() {
    mark(1);
    for (var i = 2; i <= max; i++) {
        for (var n = 2; n <= max; n++) {
            if (n % i == 0 && n != i) {
                mark(n);
            }
        }
    }
}
function mark(n) {
    var elem = document.getElementById(n);
    elem.setAttribute("class", "composite");
}
fillTable();
markComposites();
