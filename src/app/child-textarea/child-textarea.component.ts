import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-textarea',
  templateUrl: './child-textarea.component.html',
  styleUrls: ['./child-textarea.component.css']
})
export class ChildTextareaComponent {
  @Output() notify:EventEmitter<string>=new EventEmitter<string>();
  
  @Output() show:EventEmitter<string>=new EventEmitter<string>();
  
  
  passData(){
    this.notify.emit("this message is comming from child component")
  }
  /////////
  public bc:string='';

  passData1(){
    this.show.emit(this.bc

    )
  }
 @Input() ac:string='';



}


