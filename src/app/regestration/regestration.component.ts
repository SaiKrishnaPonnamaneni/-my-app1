import { Component } from '@angular/core';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent {

  name:string="";
  names:string[]=[];

  register(){
    this.names.push(this.name);
  }
  // Store EmpleeData

  empName:String="";
  empId:number=0;
  empRole:String="";

  employees:any=[];
  
  add(){
    let employee={
      id:this.empId,
      name:this.empName,
      role:this.empRole
    }
    this.employees.push(employee);
  }

}
