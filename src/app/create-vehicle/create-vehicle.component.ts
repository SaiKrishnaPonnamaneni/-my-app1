import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  id:string = "";

  constructor(private _vehicleService:VehicleService, private _activatedRoute:ActivatedRoute){

    
    _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data)
      this.id=data.id;
      //api-call
      _vehicleService.getVehicle(data.id).subscribe(
        (data:any)=>{
          this.vehicleForm.patchValue(data);
        }
      )
    }
    )

  }

public vehicleForm:FormGroup=new FormGroup(
{
Vehicle: new FormControl(),
manufacturer: new FormControl(),
model: new FormControl(),
type: new FormControl(),
fuel: new FormControl(),
color: new FormControl(),
image: new FormControl(),
cost: new FormControl()
}

)

submit(){



  if(this.id){
    //update

    this._vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
    (data:any)=>{
      alert("udated succesfully")

    },
    (err:any)=>{

      alert("Updation Failed")

    }
    )

  }else{
    //create
    console.log(this.vehicleForm);
   this._vehicleService.createVehicles(this.vehicleForm.value).subscribe(
    (data:any)=>{
      alert("created succesfully")

    },
    (err:any)=>{
      alert("creation failed")
    }

   )

}

  }
  

}
