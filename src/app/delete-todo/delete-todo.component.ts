import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css']
})
export class DeleteTodoComponent implements OnInit {

  id: number=0;
  todoId: string= "";
  constructor() { }

  ngOnInit(): void {
  }

  ondeleteTodo(){
    
  }

}
