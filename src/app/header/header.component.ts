// Import necessary Angular modules and components
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Define the HeaderComponent as an Angular component
@Component({
  selector: 'app-header', // The component can be used in templates with the <app-header> tag
  templateUrl: './header.component.html', // The HTML template for this component
  styleUrls: ['./header.component.css'] // The associated CSS styles for this component
})
export class HeaderComponent {

  // Constructor method for the HeaderComponent, which injects the Router service
  constructor(private router: Router) {}

  // goToPage method that allows navigation to a specified route
  // It takes a 'pageName' argument, which is expected to be a string representing the target route
  goToPage(pageName: string): void {
    // Use the Angular Router's 'navigate' method to navigate to the specified route
    this.router.navigate([`${pageName}`]);
  }
}