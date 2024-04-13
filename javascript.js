document.getElementById('b1').addEventListener('click', generateTable);
document.getElementById('b2').addEventListener('click', addColumn);
document.getElementById('b3').addEventListener('click', addRow);

function generateTable() {
    var rows = parseInt(document.getElementById('t1').value);
    var cols = parseInt(document.getElementById('t2').value);

    if (isNaN(rows) || isNaN(cols)) {
        alert('Please enter valid numbers for rows and columns.');
        return;
    }

    var table = '<table border="1">';

    for (var i = 0; i < rows; i++) {
        table += '<tr>';
        for (var j = 0; j < cols; j++) {
            table += '<td>&nbsp;</td>';
        }
        table += '</tr>';
    }

    table += '</table>';

    document.getElementById('tableContainer').innerHTML = table;
    document.getElementById('inputValues').innerHTML = 'Number of rows: ' + rows + ', Number of columns: ' + cols;

    // Hide the "Generate Table" button
    document.getElementById('b1').style.display = 'none';
}

function addColumn() {
    var tableRows = document.querySelectorAll('#tableContainer table tr');
    for (var i = 0; i < tableRows.length; i++) {
        var cell = document.createElement('td');
        cell.innerHTML = '&nbsp;';
        tableRows[i].appendChild(cell);
    }

    var cols = document.querySelectorAll('#tableContainer table tr:first-child td').length;
    var rows = document.querySelectorAll('#tableContainer table tr').length;
    document.getElementById('inputValues').innerHTML = 'Number of rows: ' + rows + ', Number of columns: ' + cols;
}

function addRow() {
    var table = document.querySelector('#tableContainer table');
    var cols = table.rows[0].cells.length;
    var newRow = table.insertRow();
    for (var i = 0; i < cols; i++) {
        var cell = newRow.insertCell();
        cell.innerHTML = '&nbsp;';
    }

    var cols = document.querySelectorAll('#tableContainer table tr:first-child td').length;
    var rows = document.querySelectorAll('#tableContainer table tr').length;
    document.getElementById('inputValues').innerHTML = 'Number of rows: ' + rows + ', Number of columns: ' + cols;
}
