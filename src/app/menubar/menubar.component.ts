// Import necessary Angular modules and components
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';

// Define the HeaderComponent as an Angular component
@Component({
  selector: 'app-menubar', // The component can be used in templates with the <app-header> tag
  templateUrl: './menubar.component.html', // The HTML template for this component
  styleUrls: ['./menubar.component.css'] // The associated CSS styles for this component
})
export class MenubarComponent {
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

  constructor(private matDialog:MatDialog){}
  goToPage(pageName: string){
    //podria hacer un if para ver a que pagina quiere ir
    this.matDialog.open(LoginComponent,{
      width:'360px',
    })
  }
}