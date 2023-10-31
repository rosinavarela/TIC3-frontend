import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  private unseenNotificationsSubject = new BehaviorSubject<any[]>([]);
  private seenNotificationsSubject = new BehaviorSubject<any[]>([]);

  unseenNotifications$ = this.unseenNotificationsSubject.asObservable();
  seenNotifications$ = this.seenNotificationsSubject.asObservable();

  setNotifications(unseenNotifications: any[], seenNotifications: any[]) {
    this.unseenNotificationsSubject.next(unseenNotifications);
    this.seenNotificationsSubject.next(seenNotifications);
  }
  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }


  viewNotifications(id: number): Observable<any> {
    const url = `${this.baseURL}artists/${id}/notifications`;
    return this.http.put(url, '');
  }

  getNotifications(id: number): Observable<any> {
    const url = `${this.baseURL}artists/${id}/notifications`;
    
    return this.http.get(url);
  }
}
