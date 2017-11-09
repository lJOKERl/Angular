import { Component } from '@angular/core';

class Todo {
  constructor(public title: string, public completed: boolean){}
}

let todos: Todo[] = [
  {
    title: 'Изучить JavaScript',
    completed: true
  },
  {
    title: 'Вспомнить JQuery',
    completed: false
  },
  {
    title: 'Изучить Angular',
    completed: false
  }
]


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'Список';
  todos: Todo[] = todos;
  newTodoTitle: string = "";

  create() {
    let todo: Todo = new Todo(this.newTodoTitle, false);
    this.todos.push(todo);
    this.newTodoTitle = "";
  }

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  delete(todo: Todo) {
    let index = this.todos.indexOf(todo);

    if(index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
