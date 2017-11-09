import { Component } from '@angular/core';

class Todo {
  constructor(public title: string, public completed: boolean = false) {

  }

}

const todos: Todo[] = [
  {
    title: 'Изучить JavaScript',
    completed: false
  },
  {
    title: 'Изучить Angular',
    completed: false
  },
  {
    title: 'Написать приложение',
    completed: false
  }
];

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  // Обычный title
  title = 'ToDo List';

  //Массив с задачами
  todos: Todo[] = todos;

  //Рефреш поля ввода
  newTodoTitle: string = "";

  //Метод для добавления элемента из формы в массив
  create() {
    let todo: Todo = new Todo(this.newTodoTitle);

    this.todos.push(todo);
    this.newTodoTitle = "";
  }

  //Метод для переключения css классов
  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  //Метод для удаления элемента из массива
  delete(todo: Todo) {
    let index = this.todos.indexOf(todo);

    if(index > -1) {
      this.todos.splice(index, 1);
    }
  } 
}
