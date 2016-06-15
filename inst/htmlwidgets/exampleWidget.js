HTMLWidgets.widget({

  name: 'exampleWidget',

  type: 'output',

  factory: function(el, width, height) {


    return {

      renderValue: function(x) {
        // Set globally visible X for debugging
        window.x = x;

        // Create a new table
        var table = document.createElement('table');
        table.setAttribute('height', x.length * 20);
        table.setAttribute('width', x[0].length * 20);
        table.id = 'dataTable';

        // Create info div
        var info = document.createElement('p');
        info.innerText = 'Hover over cells to see their index';
        el.appendChild(info);

        // Callback for getting the attributes of the cell on-hover
        var getIndex = function() {
          var cell = $(this).get(0);
          var r = cell.getAttribute('row');
          var c = cell.getAttribute('col');
          var v = cell.innerText;
          info.innerText = 'Row: ' + r + ' Col: ' + c + ' Val: ' + v;
        };

        // Build up the table
        for(var i = 0; i < x.length; i++) {
          var row = document.createElement('tr');
          for(var j = 0; j < x[0].length; j++) {
            var cell = document.createElement('td');

            // Set attributes
            cell.setAttribute('row', i);
            cell.setAttribute('col', j);

            // Apply hover callback
            cell.onmouseover = getIndex;

            cell.innerText = x[i][j];
            row.appendChild(cell);
          }
          table.appendChild(row);
        }
        el.appendChild(table);

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
