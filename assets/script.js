"use strict";

let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let list = document.getElementById('list');
let todo = [];

function add() {
    todo.push(inp.value);
    inp.value = '';
    let data = ''
    for (let item of todo) {
        data += `<li class="list-group-item">${item}</li>`

        if(!todo.includes(inp.value)){
            todo.pop();
            alert("This task is already inserted to the list!");
            return;
        }
   
    }
    
    list.innerHTML = data;
    console.log(todo);
}

function add1(){
    for (let i = 0; i < todoList.length; i++) 
        if (newToDo === todoList[i]) {
        }
   
    if((inp.value !='')){
        todo.pop();
        
    }
}
btn.addEventListener('click', add)

