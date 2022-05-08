import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos : Todo[] = [];
  newTodo : string;
  fatto : Todo[] = [];

  saveTodo(){

    if(this.newTodo){

      let todo = new Todo();
      todo.title = this.newTodo;
      todo.completed = true;
      this.todos.push(todo);
      this.newTodo = '';
    }else{
      alert('inserisci un task');
    }

  }
  completato(){
    this.todos.pop()
    }

aggiungi(){
  if(this.newTodo){
    let todo = new Todo();
    todo.title = this.newTodo;
    todo.completed = true;
    this.fatto.push(todo);
    this.newTodo = '';

  }


  }

}
