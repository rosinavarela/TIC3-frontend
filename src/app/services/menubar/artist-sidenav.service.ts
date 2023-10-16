import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistSidenavService {
  private isExpandedSubject = new BehaviorSubject<boolean>(false);
  isExpanded$ = this.isExpandedSubject.asObservable();

  toggleSidenav() {
    this.isExpandedSubject.next(!this.isExpandedSubject.value);
  }
}