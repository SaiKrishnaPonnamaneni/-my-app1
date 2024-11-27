import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private _loginService:LoginService){}
  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  }
    
  )

  login(){
    console.log(this.loginForm)
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{

        alert("login succefully")

      },
      (err:any)=>{
        alert("invalid credentials");
      }
    )
  }

}
