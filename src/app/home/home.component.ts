import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user:User={
    name: 'sai', 
    age: 23, 
    address: {
      city: 'hyd',
      pin: 39999
    },
    phones: [23323,44343]
  }

}
