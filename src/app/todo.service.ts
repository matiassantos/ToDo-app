import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable()
export class TodoService extends Init {

  constructor() {

    super();
    console.log('TodoService Iniciado Papurri');
    this.load();
  }

  getTodos(){
    //obtener la lista de todos
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo){
    //obtener la lista de todos
    var todos = JSON.parse(localStorage.getItem('todos'));
    // Agregar un nuevo Todo
    todos.push(newTodo);
    //Almacenar la nueva version del paquete todos
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(i){
    // obtener la lista de todos
    var todos = JSON.parse(localStorage.getItem('todos'));
    // eliminar el todo que queremos
    todos.splice(i, 1);
    //almacenamos la nueva version del paquete todos
    localStorage.setItem('todos', JSON.stringify(todos));

  }

  updateTodo(oldText, newText){
    // obtener la lista de todos
    var todos = JSON.parse(localStorage.getItem('todos'));
    // eliminar el todo que queremos
    for(var i = 0; 1 < todos.length; i++){
      if(todos[i].text == oldText){
        todos[i].text = newText;
        console.log(newText);
        console.log(todos[i].text);
      }
    }
    //almacenamos la nueva version del paquete todos
    localStorage.setItem('todos', JSON.stringify(todos));

  }
}
