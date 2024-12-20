import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { capgeminiMail } from '../validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup=new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl("",[Validators.required,Validators.min(18),Validators.max(60)]),
    email: new FormControl("",[Validators.required,Validators.email,capgeminiMail]),
    phone: new FormControl("",[Validators.required,Validators.min(100000000),Validators.max(9999999999)]),
    address:new FormGroup({
      city:new FormControl('',[Validators.required]),
      pin:new FormControl()
    }),

    type:new FormControl(),
      // busFee:new FormControl(),
      // hostleFee:new FormControl()
    cards: new FormArray([])
    
  })
  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number:new FormControl('',[Validators.required]),
        expiry:new FormControl(),
        cvv: new FormControl(),
      })
    )
  }
 
constructor(){
     this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholor'){
          this.userForm.addControl("busFee",new FormControl());
          this.userForm.removeControl("hostleFee");
        }else{

          this.userForm.addControl("hostleFee",new FormControl());
          this.userForm.removeControl("busFee");
        }

        }
      
     )
}


  submit(){
    console.log(this.userForm);
  }

  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);

  }

}
