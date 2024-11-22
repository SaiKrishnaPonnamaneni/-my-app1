import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
complete:any;
  mails:any=[];
  myclass: any;
  constructor(private _mailService :MailService){
    _mailService.getMails().subscribe(
         
      (data:any)=>{
        return this.mails=data;        
      },
    (err:any)=>{
      alert("Internel server error ")
    }
    )
    
  }

}
