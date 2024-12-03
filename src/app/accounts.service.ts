import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpClient:HttpClient) { }
  url:string="https://6128991386a213001729f9df.mockapi.io/test/v1/principals";

  getAccounts():Observable<any>{
    return this._httpClient.get(this.url)
  }
  
  getAccount(id:string):Observable<any>{
    return this._httpClient.get(this.url+"/"+id)
  }

  getFilteredAccounts(term:string):Observable<any>{
    return this._httpClient.get(this.url+"?filter="+term)
  }

  getSortedAccounts(column:string,order:string):Observable<any>{
    return this._httpClient.get(this.url+"?sortBy="+column+"&order="+order);
  }


  getPaginationAccounts(limit:number,page:number):Observable<any>{
    return this._httpClient.get(this.url+"?limit="+limit+"&page="+page);
  }


  deletedAccounts(id:number):Observable<any>{
    return this._httpClient.delete(this.url+"/"+id);
  }
  createAccounts(data:any):Observable<any>{
    return this._httpClient.post(this.url,data);
  }

  updateAccounts(id:string,data:any):Observable<any>{
    return this._httpClient.put(this.url+"/"+id,data);
  }

  
}
