import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/models/User';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/shared/models/Artist';


@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  registerArtist(data: FormData): Observable<any> {
    const headers = {'content-type': 'application/json'}  //because we are sending data as json
    const body = JSON.stringify(data);  //converts User object into a json string
    console.log(body)
    return this.http.post(this.baseURL+'artists', body, {'headers':headers})
  }

  registerBusiness(data: FormData): Observable<any> {
    const headers = {'content-type': 'application/json'}  //because we are sending data as json
    const body = JSON.stringify(data);  //converts User object into a json string
    console.log(body)
    return this.http.post(this.baseURL+'businesses', body, {'headers':headers})
  }

  registerProfileArtist(data: any): Observable<any> {
    const headers = {'content-type': 'application/json'}  //because we are sending data as json
    const body = JSON.stringify(data);  //converts User object into a json string
    console.log(body)
    const id = data.id;
    const url = `${this.baseURL}artists/${id}`;
    return this.http.put(url, body, {'headers':headers})
  }

}