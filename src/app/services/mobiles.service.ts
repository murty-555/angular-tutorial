import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs'
import { Mobile } from '../models/mobileModel';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobilesService {
  public mobiles = [];
  url = "../../assets/data/mobilesData.json"

  constructor(private _http: HttpClient){}

  getMobiles():Observable<Mobile[]>{
    return this._http.get<Mobile[]>(this.url)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Unknown server error!")
  }

  
}
