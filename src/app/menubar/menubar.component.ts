// Import necessary Angular modules and components
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessAccountComponent } from '../business-account/business-account.component';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { SidenavService } from 'src/app/services/menubar/sidenav.service'; 
import { BusinessSidenavService } from 'src/app/services/menubar/business-sidenav.service'; 
import {NavigationEnd } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'app-menubar', // The component can be used in templates with the <app-header> tag
  templateUrl: './menubar.component.html', // The HTML template for this component
  styleUrls: ['./menubar.component.css'] // The associated CSS styles for this component
})
export class MenubarComponent{

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger | undefined;

  usertype= "general";

  constructor(private matDialog:MatDialog, public sidenavService: SidenavService, public businessSidenavService: BusinessSidenavService, private router: Router){
    // Subscribe to the NavigationEnd event to detect route changes. Esto es para ver en que ruta esta y asi mover la sidenav acorde
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        console.log("Current Route:", currentRoute);

        // Determine usertype based on the current route
        if (currentRoute.includes('dashboard-business')) {
          this.usertype = "business";
        } else {
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

  goToPage(pageName: string) {
    this.matDialog.open(LoginComponent, {
    width: '360px',
    });
  }

  navigateToBusinessDashboard() {
    this.router.navigate(['dashboard-business']);
  }
  
  toggleSidenav() {
    if (this.usertype=="general"){
      this.sidenavService.toggleSidenav();
    }
    else if (this.usertype=="business"){
      this.businessSidenavService.toggleSidenav();
    }
  }
  
  selectOption(option: string){
    if (option=="account"){
      this.matDialog.open(BusinessAccountComponent, {
        width: '40%',
        });
    }
  }

}
