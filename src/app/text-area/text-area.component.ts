import { Component, Input } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  

  @Input() text:string='';
  @Input()  max:number=0;

  // if(text.length==max){

  // }
  

  

  


}
