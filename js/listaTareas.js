function add()
{
   var table = document.getElementById("myTable");
   var row = table.insertRow(0);
   var cell1 = row.insertCell(0);
   cell1.innerHTML = "NEW ROW";
}