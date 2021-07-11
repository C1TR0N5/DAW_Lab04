var post = document.getElementById("ButtonPost");
var clear = document.getElementById("ButtonClear");
var mark = document.getElementById("ButtonMark");
var del = document.getElementById("ButtonDelete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);

function TodoPost(e) {
    e.preventDefault();
    
    var to_do = document.getElementById("TodoText").value;
    var list = document.getElementById("todoList");

    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.name = "todo";
    
    label.textContent = to_do;

    div.appendChild(checkbox);
    div.appendChild(label);
    list.appendChild(div);

    document.getElementById("TodoText").value = "";
}

function TodoClear() {
    var todos = document.getElementsByName("todo");
    
    todos.forEach(function(elemento) {
        elemento.checked = false;
    })
}

function TodoMark() {
    var todos = document.getElementsByName("todo");

    for ( var i = 0 ; i < todos.length ; i++ ) {
        todos[i].checked = true;
    }
}

function TodoDel() {

    var todos = document.getElementsByName("todo");

    for ( var i = 0 ; i < todos.length ; i++ ) {
        if (todos[i].checked){
            todos[i].parentElement.remove();
            i--;
        }
    }
}