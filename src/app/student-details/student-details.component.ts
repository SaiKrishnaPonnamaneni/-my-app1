import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentCardService } from '../student-card.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  student:any={};

  constructor(private _activatedRoute:ActivatedRoute, private _studentService:StudentCardService){

    _activatedRoute.params.subscribe(

      (data:any)=>{
        console.log(data);

        _studentService.getStudent(data.id).subscribe(

          (data:any)=>{
            this.student=data;
          }
        )

      }
    )

  }
}
