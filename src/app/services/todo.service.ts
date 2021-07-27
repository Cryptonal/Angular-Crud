import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(protected http: HttpClient) {
       
    }

    getTodos(): Observable<any> {
        return this.http.get<any>('http://localhost:3000/todos/getTodos');
    }

    createTodo(todo: any): Observable<any> {
        return this.http.post<any>("http://localhost:3000/todos/createTodos",todo);
    }

    deleteTodo(id: number): Observable<any> {
        debugger;
        return this.http.post<any>(`http://localhost:3000/todos/${id}`,{id:id});
        //return this.http.post<any>(`http://localhost:3000/todos/${id}`,{id:id});
    }

    editTodo(todo: any): Observable<any> {
        return this.http.post("http://localhost:3000/todos/Hammad", todo);
    }
}
