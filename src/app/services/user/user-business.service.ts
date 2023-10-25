import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/models/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserBusinessService {
    baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getBusinessById(id: number): Observable<any> {
    const url = `${this.baseURL}businesses/${id}`;
    
    return this.http.get(url);
  }

  updateBusiness(id: number, businessData: any): Observable<any> {
    const url = `${this.baseURL}businesses/${id}`;
    
    return this.http.put(url, businessData);
  }
}