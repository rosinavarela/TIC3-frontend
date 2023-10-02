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

  createUser(user: {userName: string, password: string}) {
    const headers = new HttpHeaders({ 'myHeader': 'algo' });
    this.http.post<{ name: String}>(
      'https://localhost:3000/login', user, { headers: headers })
    .subscribe((res) => {
      console.log(res);
    });

  }

  getUser(): Observable<User> {
    // this.http.get<any>('URL').subscribe(data => )
    console.log('getUser'+ this.baseURL+'login')
    return this.http.get<User>(this.baseURL+'login')
  }

  checkUser(user:User): Observable<any> {
    const headers = {'content-type': 'application/json'}  //because we are sending data as json
    const body = JSON.stringify(user);    //converts User object into a json string
    console.log(body)
    return this.http.post(this.baseURL+'login', body, {'headers':headers})
  }

  deleteUser() {

  }
}