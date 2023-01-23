document.getElementById("add").onclick = function() {
 var text = document.getElementById("name").value;
 var li = "<li>" + text + "</li>";
 document.getElementById("list").appendChild(li);
}
