import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

const routes: Routes = [

  { path:'addtodo', component: AddTodoComponent},
  { path: 'homepage', component: HomePageComponent },
  { path: 'getTodos', component: ShowTodoComponent },
  { path: 'deleteTodo', component: DeleteTodoComponent },
  { path: 'updateTodo', component: UpdateTodoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
