import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  accounts:any=[];

  term:string="";
  column:string="";
  order:string=" ";
  limit:number=0;
  page:number=0;

  constructor(private _accountService:AccountsService){
    _accountService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts=data;

      },
      (err:any)=>{
        alert("Internal server error");

      }
    )
  }

  filterByTerm(){
    this._accountService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;

      },
      (err:any)=>{
        alert("Internal server error");

      }
    )
  }

  sorted(){
    this._accountService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;

      },
      (err:any)=>{
        alert("Internal server error");

      }
    )
  }
  pagination(){
    this._accountService.getPaginationAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts=data;

      },
      (err:any)=>{
        alert("Internal server error");

      }
    )
  }

  delete(id:number){
    if(confirm("Are you sure to delete?")==true){
    this._accountService.deletedAccounts(id).subscribe(
      (data:any)=>{
        alert("Deleted Succesfully")
        location.reload();

      },
      (err:any)=>{
        alert("Internal server error");

      }
    )
  }
  else{
    alert("you have Cancled")
  }
}


}
