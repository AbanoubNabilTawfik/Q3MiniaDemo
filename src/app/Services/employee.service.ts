import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployee } from '../Shared/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  _url:string="/assets/Data/employees.json";
  getEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Internal Server Error")
    }))
  
  }

  postForm()
  {
    let postedObject={
      "userId":1,
      "title":"Angular",
      "body":"Anguar http module with observable"
    }
   return this.http.post("https://jsonplaceholder.typicode.com/posts",postedObject).pipe(catchError((error)=>{
       return throwError(()=>error.message||"Internal server error");
   }));
  }
}
