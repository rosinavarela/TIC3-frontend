import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/models/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserArtistService {
    baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getArtisytById(id: number): Observable<any> {
    const url = `${this.baseURL}artists/${id}`;
    
    return this.http.get(url);
  }

  updateArtist(id: number, artistData: any): Observable<any> {
    const url = `${this.baseURL}artists/${id}`;
    
    return this.http.put(url, artistData);
  }
}