import { Component, OnInit } from '@angular/core';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoService } from '../services/todo.service';
import { Todo } from '../update-todo/TodoModel/Todos';


@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {

  
todos:any[]=[];

i: number= 0;
  constructor(private _todoServics:TodoService) { }

  ngOnInit() {
    //Todo Extraction
  this.getTodos();

  }

  getTodos(){
    this._todoServics.getTodos().subscribe(res=> {
    this.todos = res
    })
  }
  UpdateTodo(){}

  delTodo(id: number){
    debugger;
    this._todoServics.deleteTodo(id).subscribe(res=> {
    })
    this.getTodos();
  }

}
