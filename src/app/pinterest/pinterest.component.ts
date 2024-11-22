import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {

  pinterests:any=[];

  constructor(private _pinterestService:PinterestService){

    _pinterestService.getPinterest().subscribe(

      (data:any)=>{
        return this.pinterests=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
      
    )

  }

}
