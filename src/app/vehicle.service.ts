import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

  constructor( private _httpClient:HttpClient) { }

 getVehicles():Observable<any>{
  return this._httpClient.get(this.baseUrl);
 }
 getVehicle(id:string):Observable<any>{
  return this._httpClient.get(this.baseUrl+"/"+id)
 }
 getFilteredVehicles(term:string):Observable<any>{
  return this._httpClient.get(this.baseUrl+term);
 }

 getSortedVehicles(column:string,order:string):Observable<any>{
  return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order"+order);
 }

 deletedVehicles(id:string):Observable<any>{
  return this._httpClient.delete(this.baseUrl+"/"+id);
 }

 getPagedVehicles(limit:number,page:number):Observable<any>{
  return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+page);
 }

 createVehicles(data:any):Observable<any>{
  return this._httpClient.post(this.baseUrl,data);
 }

 updateVehicle(id:string,data:any):Observable<any>{
  return this._httpClient.put(this.baseUrl+"/"+id,data);
 }

}
