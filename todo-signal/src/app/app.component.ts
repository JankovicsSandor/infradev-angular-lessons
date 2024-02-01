import { Component, Signal, WritableSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITodoItem } from './interface/todo-item.interface';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  todoList:WritableSignal<ITodoItem[]>=signal([]);
  title = 'todo-signal';
  addNewForm: FormGroup<{name:FormControl<string|null>}>;

  constructor(private fb:FormBuilder){
    this.addNewForm= this.fb.group({
      name:""
    })
  }

  addNewTodo(){
    let todoItem=<ITodoItem>{id:crypto.randomUUID().toString(),isDone:false,name:this.addNewForm.value.name}
    this.todoList.update((todoList)=>[...this.todoList(),todoItem])
    this.addNewForm.reset();
  }

  markItemAsDone(id:string){
    let items=this.todoList().map((todo)=>todo.id==id?<ITodoItem>{...todo,isDone:true}:todo)
    this.todoList.update((_)=>items)
  }
}
