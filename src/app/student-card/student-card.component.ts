import { Component } from '@angular/core';
import { StudentCardService } from '../student-card.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {

  students:any=[];
  term:string="";
  column:string="";
  order:string="";
  constructor(private __studentCardService:StudentCardService){
    this.__studentCardService.getStudents().subscribe(

      (data:any)=>{

        return this.students=data;

      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
    filterByTerm(){
    this.__studentCardService.getSearchedStudents(this.term).subscribe(
       
      (data:any)=>{
        
          this.students=data;
        },
        (err:any)=>{
          alert("Internal Server Error");
        }

    )
  };


  sorted(){
    this.__studentCardService.getSortedStudents(this.column,this.order).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }

  );
}


  }



function filterByTerm() {
  throw new Error('Function not implemented.');
}

