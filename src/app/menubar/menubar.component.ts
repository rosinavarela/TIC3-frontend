// Import necessary Angular modules and components
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessAccountComponent } from '../business-account/business-account.component';
import { ArtistAccountComponent } from '../artist-account/artist-account.component';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { SidenavService } from 'src/app/services/menubar/sidenav.service'; 
import { BusinessSidenavService } from 'src/app/services/menubar/business-sidenav.service'; 
import { ArtistSidenavService } from 'src/app/services/menubar/artist-sidenav.service'; 
import {NavigationEnd } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { NotificationService } from '../services/notifications/notification.service';


@Component({
  selector: 'app-menubar', // The component can be used in templates with the <app-header> tag
  templateUrl: './menubar.component.html', // The HTML template for this component
  styleUrls: ['./menubar.component.css'] // The associated CSS styles for this component
})
export class MenubarComponent{

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger | undefined;
  @ViewChild('notificationMenuTrigger') notificationMenuTrigger: MatMenuTrigger | undefined;
  unseenNotificationsArray: any[] = [];
  seenNotificationsArray: any[] = [];
  lenUnseenNotifications: number=0;
  badgeHidden=true; //esto tiene que estar true si no tiene notificaciones

  usertype= "general";

  constructor(private matDialog:MatDialog, public sidenavService: SidenavService, public businessSidenavService: BusinessSidenavService, public artistSidenavService: ArtistSidenavService, private router: Router, private notificationService: NotificationService){
    // Subscribe to the NavigationEnd event to detect route changes. Esto es para ver en que ruta esta y asi mover la sidenav acorde
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        console.log("Current Route:", currentRoute);

        // Determine usertype based on the current route
        if (currentRoute.includes('dashboard-business')) {
          this.usertype = "business";
        } 
        else if (currentRoute.includes('dashboard-artist')){
          this.usertype = "artist";
        }
        else {
          this.usertype = "general";
        }
      }
    });
    this.notificationService.unseenNotifications$.subscribe((unseenNotifications) => {
      this.unseenNotificationsArray = unseenNotifications;
      this.lenUnseenNotifications = this.unseenNotificationsArray.length;
      this.badgeVisibility();
    });
    this.notificationService.seenNotifications$.subscribe((seenNotifications) => {
      this.seenNotificationsArray = seenNotifications;
    });
    console.log('unseen: ',this.unseenNotificationsArray);
    console.log('seen: ',this.seenNotificationsArray);
  }

  toggleDropdown(): void {
    if (this.menuTrigger) {
        this.menuTrigger.openMenu();
    }
  }

  toggleNotificationDropdown(): void {
    if (this.notificationMenuTrigger) {
        this.notificationMenuTrigger.openMenu();
    }
  }

  goToPage(pageName: string) {
    this.matDialog.open(LoginComponent, {
    width: '360px',
    });
  }

  navigateToBusinessDashboard() {
    this.router.navigate(['dashboard-business']);
  }
  
  navigateToArtistDashboard() {
    this.router.navigate(['dashboard-artist']);
  }

  toggleSidenav() {
    if (this.usertype=="general"){
      this.sidenavService.toggleSidenav();
    }
    else if (this.usertype=="business"){
      this.businessSidenavService.toggleSidenav();
    }
    else if (this.usertype=="artist"){
      this.artistSidenavService.toggleSidenav();
    }
  }
  
  selectOption(option: string){
    if (option=="account"){
      if (this.usertype=="business"){
        this.matDialog.open(BusinessAccountComponent, {
          width:'40%',
          });
      }
      else if (this.usertype=="artist"){
        this.matDialog.open(ArtistAccountComponent, {
          width: '40%',
          });
      }
    }
  }

  badgeVisibility(){
    if (this.lenUnseenNotifications==0){
      this.badgeHidden=true;
    }
    else{
      this.badgeHidden=false;
    }
  }

  onMenuClosed(){
    this.badgeHidden= true; 
    this.lenUnseenNotifications=0;
    //aca tendria que haber una funcion que le ponga a todas las notis del array seen
  }
  
}

