var primetable = document.getElementById("primetable");
var maximum = document.getElementById("maximum");
var params = (new URL(document.location)).searchParams;
var max;
if (!params.has("max")) { max = 1000; }
else { max = params.get("max"); }
function fillTable(j) {
    var tableRow = document.createElement("tr");
    for (var i = j; i <= max; i++) {
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
function markComposites(j) {
    for (var i = j; i <= max; i++) {
        for (var n = i; n <= max; n++) {
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
fillTable(1);
mark(1);
markComposites(2);
