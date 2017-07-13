import { Component } from '@angular/core';
import { TodosComponent } from './todos/todos.component';

import { TodoService } from './todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})
export class AppComponent {
  title = 'My To Do List';
}
