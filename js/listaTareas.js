/*function add()
{
   var table = document.getElementById("myTable");
   var row = table.insertRow(0);
   var cell1 = row.insertCell(0);
   var newText1 = document.getElementById("newText").value;
   cell1.innerHTML = newText1;
   clean();
}*/
function clean()
{
	document.getElementById("newText").value="";
}

function Tarea(title) 
{
   this.title = title;
   this.toHTML = function() 
   {
      var html = ""; 
      html += this.title;
      return html;
   }  
}
function List() 
{
   this.tareas=[];
      
   this.add=function(tarea) 
   {
      this.tareas.push(tarea);
   }
   
   this.renderInElement  = function(element)
   {
      var stringHtml = "";
      element.innerHTML = stringHtml;
      for (var i in this.tareas) 
      {
         var tarea=this.tareas[i];
         stringHtml+="<tr>"+"<th>"+tarea.toHTML()+"</th>"+"</tr>";
      }
      element.innerHTML = stringHtml;
   }
}
var createCeldaElement = document.getElementById("myTable"); 
var createCelda = new List();
createCelda.add (new Tarea("delectus aut autem"));
createCelda.add (new Tarea("quis ut nam facilis et officia qui"));
createCelda.add (new Tarea("fugiat veniam minus"));
createCelda.add (new Tarea("et porro tempora"));
createCelda.add (new Tarea("laboriosam mollitia et enim quasi adipisci quia provident illum"));
createCelda.add (new Tarea("qui ullam ratione quibusdam voluptatem quia omnis"));
createCelda.add (new Tarea("illo expedita consequatur quia in"));
createCelda.add (new Tarea("quo adipisci enim quam ut ab"));
createCelda.add (new Tarea("molestiae perspiciatis ipsa"));
createCelda.add (new Tarea("illo est ratione doloremque quia maiores aut"));

createCelda.renderInElement(createCeldaElement);