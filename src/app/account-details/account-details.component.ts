import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
 account:any={};

  constructor(private _activateRoute:ActivatedRoute, private _accountService:AccountsService ){



    _activateRoute.params.subscribe(

      (data:any)=>{
        console.log(data);
  
        _accountService.getAccount(data.id).subscribe(

          (data:any)=>{
            this.account=data;

          }
        )

        
      }
    )
  }

}
