import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentCardService {

  constructor(private _httpClient:HttpClient) { }

  getStudents():Observable<any>{

  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }


  getSearchedStudents(term:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term)


  }

  getSortedStudents(column:string,order:string):Observable<any>{


    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order"+order)


  }
}
