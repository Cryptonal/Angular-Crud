import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../update-todo/TodoModel/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  createdBy: string = '';
  todos:any[] = [];
  todoVal: string = "";

  constructor(private _todoServics:TodoService) { 

    
  }

  ngOnInit(): void {
  }

  onCreate(){
      console.log(this.createdBy + "" + this.todoVal);
      let name = this.createdBy;
      let todoDesc = this.todoVal;
      let _todo = {
        "description": todoDesc,
        "feedbackBy": name
      }
      this._todoServics.createTodo(_todo).subscribe(res=>{
        alert("Todo added");
     // return res + " added";

    })

  }

}
