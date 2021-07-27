import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    HomePageComponent,
    DeleteTodoComponent,
    UpdateTodoComponent,
    ShowTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
