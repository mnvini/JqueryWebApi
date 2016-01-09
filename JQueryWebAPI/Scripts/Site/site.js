

function loadPositions() {
    $(function() {
        $.getJSON("/api/Positions", function (items) {
            var rowTable = "<thead><tr><th>ID</th> <th>Position Name</th> <th>Position</th> <th>Slary Average</th></tr></thead>";
            rowTable += "<tbody>";
            for (var i = 0; i < items.length; i++) {
                rowTable += "<tr><td>" + items[i].idCargos + "</td>";
                rowTable += "<td>" + items[i].nome + "</td>";
                rowTable += "<td>" + items[i].area + "</td>";
                rowTable += "<td>" + items[i].mediaSalario + "</td></tr>";
            }
            rowTable += "</tbody>";

            $("table#tablePositions").html(rowTable);
            $('#tablePositions').dataTable({
    
                "oLanguage": {
                    "sSearch": "Search:",
                    "sInfoFiltered": " Filtering from _MAX_ records",
                    "sLengthMenu": "",
                    "sInfo": "",
                    "oPaginate": {
                        "sNext": "<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>",
                        "sPrevious": "<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>"
                    },
                },
  
            });
           

        });
    });
}
function searchPosition(item) {
    $.getJSON("/api/Positions/SearchPositions", {position : item}, function(data) {
        var rowTable = "<thead><tr><th>ID</th> <th>Position Name</th> <th>Position</th> <th>Slary Average</th></tr></thead>";
        rowTable += "<tbody>";
        for (var i = 0; i < data.length; i++) {
            rowTable += "<tr><td>" + data[i].idCargos + "</td>";
            rowTable += "<td>" + data[i].nome + "</td>";
            rowTable += "<td>" + data[i].area + "</td>";
            rowTable += "<td>" + data[i].mediaSalario + "</td></tr>";
        }
        rowTable += "</tbody>";

        $("table#tablePositions").html(rowTable);
        $("#tablePositions").DataTable();

    });
}


