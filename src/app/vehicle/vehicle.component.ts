import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any=[];
  term:string="";
  column:string="";
  order:string="";
  limit:number=0;
  page:number=0;

  constructor(private _vehicleService:VehicleService){
    _vehicleService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data: any) => {
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  sorted(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data: any) => {
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  
  delete( id:string){
    if(confirm("Are you sure to delete?")==true){
    this._vehicleService.deletedVehicles(id).subscribe(
      (data: any) => {
       alert("Deleted Succesfully");
       location.reload();
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }else{
    alert("you have cancelled")
  }

  }

  pagination(){
    
    this._vehicleService.getPagedVehicles(this.limit,this.page).subscribe(
      (data: any) => {
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )


  }


}