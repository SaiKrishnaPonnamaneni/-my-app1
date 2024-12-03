import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  id:string="";
   constructor(private _accountService:AccountsService, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data)
        this.id=data.id;
        //api-call  form lo details ravataniki
        _accountService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.accountForm.patchValue(data);
          }
        )
      }
    )

   }
  public accountForm:FormGroup=new FormGroup(
    {
      account_name: new FormControl(),
available_balance: new FormControl(),
account_number: new FormControl(),
city: new FormControl(),
profie_picture: new FormControl(),
    }
  )


  submit(){

    if(this.id){
      this._accountService.updateAccounts(this.id,this.accountForm.value).subscribe(

        (data:any)=>{
          alert("Updated Succesfully")
        },
        (err:any)=>{
          alert("updation Failed")
        }
      )
    }else{

     // console.log(this.accountForm);
    this._accountService.createAccounts(this.accountForm.value).subscribe(

      (data:any)=>{

        alert("Created Succesfully")

      },
      (err:any)=>
      {
       alert("Creation Failed ")
      }
    )

  }

    }
    

}
