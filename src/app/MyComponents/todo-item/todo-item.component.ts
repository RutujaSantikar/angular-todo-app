import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';
 import { Todo} from 'src/app/Todos'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{
   
  @Input () todo!:Todo;
  @Input() i! :number;
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter
  @Output() todoCheckbox:EventEmitter<Todo> = new EventEmitter

  ngOnInit(): void {
    
  }

  onCheckBoxClick(todo:Todo){
    this.todoCheckbox.emit(todo)
  }

  onClick(todo:Todo){
    this.todoDelete.emit(todo)
    console.log("onclick has been triggered")
  }

}
