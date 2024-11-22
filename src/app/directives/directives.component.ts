import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  // age:number=30;
  ages:number[]=[10,20,30,40];

  //state:string="chenai";
  states:string[]=["AP","TS","MP","CHENNAI"];
 // any not recomended
  products:any[]=[
    {name:"pen",price:200},
    {name:"book",price:300},
    {name:"laptop",price:2000}
  ]

  today:any=new Date();
}
