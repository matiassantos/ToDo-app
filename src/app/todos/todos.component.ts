import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

 todos;
 text;
oldText;
newText;
 appState = 'default';


  constructor( private _todoService: TodoService) { }

  ngOnInit() {
      this.todos = this._todoService.getTodos();
  }

  addTodo(){
    var newTodo = {
      text: this.text
    }
    console.log(newTodo);
    this.todos.push(newTodo);

this._todoService.addTodo(newTodo);

  }

  deleteTodo(i){
    this.todos.splice(i,1);
    this._todoService.deleteTodo(i);
  }

  editTodo(todo){
    this.appState = 'edit';
    console.log(this.appState);
    this.text = todo.text;
    this.oldText = todo.text;
  }

  updateTodo(){
    for(var i = 0; i < this.todos.length; i++){
      if(this.todos[i].text == this.oldText){
        this.todos[i].text = this.text;
      }
    }
    console.log('pre envio al todoservice');
    this._todoService.updateTodo(this.oldText, this.text);
    console.log('post envio al todoservice');
  };

}
