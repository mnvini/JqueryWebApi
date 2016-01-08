function loadPositions() {
    $(function() {
        $.getJSON("/api/Positions/Positions", function(items) {
            var rowTable = "<tr><th>ID</th> <th>Position Name</th> <th>Position</th> <th>Slary Average</th></tr>";
            for (var i = 0; i < items.length; i++) {
                rowTable += "<tr><th>" + items[i].idCargos + "</th>";
                rowTable += "<th>" + items[i].nome + "</th>";
                rowTable += "<th>" + items[i].area + "</th>";
                rowTable += "<th>" + items[i].mediaSalario + "</th></tr>";
            }
            $("table#tablePositions").html(rowTable);
        });
    });
}
function searchPosition(item) {
    $.getJSON("/api/Positions/SearchPositions", {position : item}, function(data) {
        var rowTable = "<tr><th>ID</th> <th>Position Name</th> <th>Position</th> <th>Slary Average</th></tr>";
        for (var i = 0; i < data.length; i++) {
            rowTable += "<tr><th>" + data[i].idCargos + "</th>";
            rowTable += "<th>" + data[i].nome + "</th>";
            rowTable += "<th>" + data[i].area + "</th>";
            rowTable += "<th>" + data[i].mediaSalario + "</th></tr>";
        }
        $("table#tablePositions").html(rowTable);
    });
}