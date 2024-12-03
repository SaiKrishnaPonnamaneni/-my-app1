import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentCardService {

  url:string=" https://6128991386a213001729f9df.mockapi.io/test/v1/student";

  constructor(private _httpClient:HttpClient) { }

  getStudents():Observable<any>{

  return this._httpClient.get(this.url)
  }

  getStudent(id:string):Observable<any>{

    return this._httpClient.get(this.url+"/"+id);
    }

  getSearchedStudents(term:any):Observable<any>{
    return this._httpClient.get(this.url+"?filter="+term)


  }

  getSortedStudents(column:string,order:string):Observable<any>{


    return this._httpClient.get(this.url+"?sortBy="+column+"&order"+order)


  }

  addStudents(data:any):Observable<any>{
    return this._httpClient.post(this.url, data)
  }
   

  updateStudent(id:string,data:any):Observable<any>{
    return this._httpClient.put(this.url+"/"+id, data)
  }

}
