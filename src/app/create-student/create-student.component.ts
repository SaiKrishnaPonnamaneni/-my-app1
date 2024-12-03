import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentCardService } from '../student-card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  id:string="";

  constructor(private _studentService:StudentCardService, private _activatedRoute:ActivatedRoute){


_activatedRoute.params.subscribe(

  (data:any)=>{

    console.log(data);
    this.id=data.id;
    //api-call
    _studentService.getStudent(data.id).subscribe(
      (data:any)=>{
        this.studentForm.patchValue(data);
      }
    )

  }
)

  }

  public studentForm:FormGroup=new FormGroup(

{
name: new FormControl(),
phone: new FormControl(),
city: new FormControl(),
dob: new FormControl(),
profile_picture: new FormControl(),
email: new FormControl(),
school_logo: new FormControl(),
school_name: new FormControl(),
school_city: new FormControl(),
school_pin: new FormControl(),
  }
);

submit(){

  if(this.id){

    this._studentService.updateStudent(this.id,this.studentForm.value).subscribe(

      (data:any)=>{
          alert("Updated Succesfully")
      },
      (err:any)=>{
        alert("Updation Failed")
      }
    )

  }else{

    // console.log(this.studentForm)
 this._studentService.addStudents(this.studentForm.value).subscribe(
  (data:any)=>{
    alert("Students Data Uploaded Sucessfullly")
  },
  (err:any)=>{
    alert("Failed To Upload");
  }
 )

}


  }

  

}
