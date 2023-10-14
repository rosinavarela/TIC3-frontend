// Import necessary Angular modules and components
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { SidenavService } from 'src/app/services/menubar/sidenav.service'; 
import { BusinessSidenavService } from 'src/app/services/menubar/business-sidenav.service'; 
import { ActivatedRoute } from '@angular/router';


// Define the HeaderComponent as an Angular component
@Component({
  selector: 'app-menubar', // The component can be used in templates with the <app-header> tag
  templateUrl: './menubar.component.html', // The HTML template for this component
  styleUrls: ['./menubar.component.css'] // The associated CSS styles for this component
})
export class MenubarComponent{
/*
  // Constructor method for the HeaderComponent, which injects the Router service
  constructor(private router: Router) {}

  // goToPage method that allows navigation to a specified route
  // It takes a 'pageName' argument, which is expected to be a string representing the target route
  goToPage(pageName: string): void {
    // Use the Angular Router's 'navigate' method to navigate to the specified route
    this.router.navigate([`${pageName}`]);
  }
*/

  constructor(private matDialog:MatDialog, public sidenavService: SidenavService, public businessSidenavService: BusinessSidenavService, private router: Router,private route: ActivatedRoute){}
  
  goToPage(pageName: string){
    //podria hacer un if para ver a que pagina quiere ir
    this.matDialog.open(LoginComponent,{
      width:'360px',
    })
  }

  usertype= "general";

  navigateToBusinessDashboard() {
    this.router.navigate(['dashboard-business']);
    this.usertype="business"; //esto lo agregue para que sepa que cambio el tipo de usuario para la sidenav. Pero en realidad en el login este boton no va a estar. Le tendria que pasar alguna variable al menubar. IMPORTANTE: se tiene que fijar en relaidad directamente en que ruta esta porque sino cuando haces refresh vuelve a estar seteado como general y no usa la sidenav bien. 
  }
  
  toggleSidenav() {
    if (this.usertype=="general"){
      this.sidenavService.toggleSidenav();
    }
    else if (this.usertype=="business"){
      this.businessSidenavService.toggleSidenav();
    }
  }

}
