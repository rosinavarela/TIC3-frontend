import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/models/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  checkUser(user:User): Observable<any> {
    const headers = {'content-type': 'application/json'}  //because we are sending data as json
    const body = JSON.stringify(user);    //converts User object into a json string
    console.log(body)
    return this.http.post(this.baseURL+'login', body, {'headers':headers})
  }

}