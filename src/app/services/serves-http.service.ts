import { HttpHeaders,HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ServesHttpService {
  private httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  private API_SERVER = 'http://localhost:3000';
  public getProfile():Observable<any>{
    const url = `${this.API_SERVER}/profile`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  public getComment():Observable<any>{
    const url = `${this.API_SERVER}/comments`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  public getPosts():Observable<any>{
    const url = `${this.API_SERVER}/posts`;
    return this.httpClient
    .get<any>(url,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  public addPosts(data:any):Observable<any>{
    const url = `${this.API_SERVER}/posts`;
    return this.httpClient
    .post<any>(url,data,this.httpOptions)
    .pipe(catchError(this.handleError));
  }
  constructor(private httpClient: HttpClient) { }
  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('An error occured',error.error.message);

    }else{
      console.log(`Backend returned code ${error.status},`+`body was:$(error.error)`);
    }
    return throwError("Somthing bad happend;please try agin later ")
  }

}
