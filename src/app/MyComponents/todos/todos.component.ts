import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todos"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  
 todos:Todo[];
 localItem!: string | null;

 
constructor(){

  
  // this.todos =[

  //    {
  //      sno:1,
  //      title:"This is title1",
  //      desc:"description1",
  //      active:true
  //    },
     
  //    {
  //     sno:2,
  //     title:"This is title2",
  //     desc:"description2",
  //     active:true
  //   },
    
  //   {
  //     sno:3,
  //     title:"This is title3",
  //     desc:"description3",
  //     active:true
  //   }
  // ]
  // this.localItem =JSON.parse( localStorage.getItem("todos") || '{}');
  this.localItem = localStorage.getItem("todos");

  if(this.localItem == null){
  this.todos=[]
  }
  else{
    this.todos = JSON.parse(this.localItem);
  }
}
 ngOnInit(): void {
   
 }

  deleteTodo(todo:Todo){
  console.log(todo)
  const index = this.todos.indexOf(todo);
  this.todos.splice(index,1);
  localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(todo)
     this.todos.push(todo);
     localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  
  toggleTodo(todo: Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos[index].active= !this.todos[index].active;
     localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  
}
