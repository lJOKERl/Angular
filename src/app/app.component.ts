import { Component } from '@angular/core';

class Todo {
  constructor(public title: string, public completed: boolean){}
}

let todos: Todo[] = [
  {
    title: 'Изучить JavaScript',
    completed: false
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
}
