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
            table += '<td style="color: white;">row: ' + (i + 1) + ', column: ' + (j + 1) + '</td>';
        }
        table += '</tr>';
    }

    table += '</table>';

    document.getElementById('tableContainer').innerHTML = table;

    // Hide the "Generate Table" button
    document.getElementById('b1').style.display = 'none';
    document.getElementById('t1').style.display = 'none';
    document.getElementById('t2').style.display = 'none';    
    document.getElementById('tableContainer').style.color = 'black !important';
    document.body.style.color = "white";
      var cells = document.querySelectorAll("td");

      //   cell color
      cells.forEach(function (cell) {
        cell.style.color = "black";
      });

      var h2Tags = document.getElementsByTagName("h2");

      for (var i = 0; i < h2Tags.length; i++) {
        h2Tags[i].style.color = "black";
      }
      document.getElementsByTagName("font")[0].style.display = "none";
}

function addColumn() {
    var tableRows = document.querySelectorAll('#tableContainer table tr');
    for (var i = 0; i < tableRows.length; i++) {
        var cell = document.createElement('td');
        cell.innerHTML = 'row: ' + (i + 1) + ', column: ' + (tableRows[i].cells.length + 1);
        cell.style.color = 'black'; // Set text color to black
        tableRows[i].appendChild(cell);
    }
    document.body.style.color = "white";
      var cells = document.querySelectorAll("td");

      //   cell color
      cells.forEach(function (cell) {
        cell.style.color = "black";
      });

      var h2Tags = document.getElementsByTagName("h2");

      for (var i = 0; i < h2Tags.length; i++) {
        h2Tags[i].style.color = "black";
      }
}

function addRow() {
    var table = document.querySelector('#tableContainer table');
    var cols = table.rows[0].cells.length;
    var newRow = table.insertRow();
    for (var i = 0; i < cols; i++) {
        var cell = newRow.insertCell();
        cell.innerHTML = 'row: ' + (table.rows.length) + ', column: ' + (i + 1);
        cell.style.color = 'black'; // Set text color to black
    }
    document.body.style.color = "white";
      var cells = document.querySelectorAll("td");

      //   cell color
      cells.forEach(function (cell) {
        cell.style.color = "black";
      });

      var h2Tags = document.getElementsByTagName("h2");

      for (var i = 0; i < h2Tags.length; i++) {
        h2Tags[i].style.color = "black";
      }
}
