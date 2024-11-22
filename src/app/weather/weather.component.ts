import { Component, OnInit  } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  weather: any = null;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this._weatherService.getWeathers().subscribe(
      (data: any) => {
        this.weather = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    );
  }
}
