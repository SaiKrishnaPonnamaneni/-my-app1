import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent {

  ratings:any=[];

  constructor(private _imdbRatings:ImdbService){

    this._imdbRatings.getRatings().subscribe(

      (data:any)=>{

        return this.ratings=data;

      },
      (err:any)=>{
        alert("Internal Server Erorr")
      }
    )


  }


  getStars(rating:any){
return Math.floor(rating)
  }
}
