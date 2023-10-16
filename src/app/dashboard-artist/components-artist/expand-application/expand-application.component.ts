import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expand-application',
  templateUrl: './expand-application.component.html',
  styleUrls: ['./expand-application.component.css']
})
export class ExpandApplicationComponent {

  constructor(private router: Router) { }

  /*goBackToEvent() {
    this.router.navigate(['/event']); // Replace 'event' with the actual route name
  }
  */
}
