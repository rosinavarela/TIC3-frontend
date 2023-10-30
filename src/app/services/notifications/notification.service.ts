import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
}
