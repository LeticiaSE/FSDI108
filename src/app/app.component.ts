import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todoText = "";
  todoList = [];

  addTodo() {
    console.log("Add todo", this.todoText);
    this.todoList.push(this.todoText);
    this.todoText = "";
  }
}


/*

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  name = 'Leticia Espinoza';
  count = 0;

  sayHello() {
    var x = "";
    console.log("Hello there..!");
    this.name = "Name has changed!";

  }

  increaseCounter(){
    this.count += 1;
  }

}
*/

