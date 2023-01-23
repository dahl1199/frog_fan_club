window.onload=function(){
    let button = document.getElementById("add");
    button.addEventListener("click", addName);
}
function addName(){
    var text = document.getElementById("name").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    let ul = document.getElementById("list");
    ul.appendChild(li);
}
