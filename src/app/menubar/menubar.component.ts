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


@Component({
  selector: 'app-menubar', // The component can be used in templates with the <app-header> tag
  templateUrl: './menubar.component.html', // The HTML template for this component
  styleUrls: ['./menubar.component.css'] // The associated CSS styles for this component
})
export class MenubarComponent{

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger | undefined;
  @ViewChild('notificationMenuTrigger') notificationMenuTrigger: MatMenuTrigger | undefined;


  usertype= "general";

  constructor(private matDialog:MatDialog, public sidenavService: SidenavService, public businessSidenavService: BusinessSidenavService, public artistSidenavService: ArtistSidenavService, private router: Router){
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

  notifications: string[] = ['notification1', 'notification2', 'notification3'];
  //aca tendria que haber un for que se fije si la notificacion fue vista y cuente cuantas no fueron vistas con el atributo seen. 
  // ese numero lo pasa a unseenNotifications y ademas llama a la funcion badgeVisibility()
  //esta funcion se tiene que llamar en el constructor?? o algo asi onda cuando abris la pagina deberia pasar todo esto para que se 
  //actualicen los datos

  unseenNotifications: number = 5;

  badgeHidden=false; //esto tiene que estar true si no tiene notificaciones

  badgeVisibility(){
    if (this.unseenNotifications==0){
      this.badgeHidden=true;
    }
    else{
      this.badgeHidden=false;
    }
  }

  badgeViewed(){
    this.badgeHidden= true; 
    this.unseenNotifications=0;
    //aca tendria que haber una funcion que le ponga a todas las notis del array seen
    this.toggleNotificationDropdown();
  }
  
}

