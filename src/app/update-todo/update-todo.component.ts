import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  todoid: number = 0;
  todo: string = "";
  createdBy: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  updateTodo(){
    

  }


}
