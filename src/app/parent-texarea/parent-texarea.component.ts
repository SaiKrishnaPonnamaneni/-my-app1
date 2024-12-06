import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-texarea',
  templateUrl: './parent-texarea.component.html',
  styleUrls: ['./parent-texarea.component.css']
})
export class ParentTexareaComponent{
  childData:string='';
 parentMethod(data:any) {
  this.childData=data;

 }          
 //////
 ap:string="";
 bp:string="";

 catch(value:string){
  this.bp=value;
 }



}


