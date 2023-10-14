import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expanded-event-business',
  templateUrl: './expanded-event-business.component.html',
  styleUrls: ['./expanded-event-business.component.css']
})
export class ExpandedEventBusinessComponent {

  constructor(private router: Router) { }

  goBackToEvent() {
    this.router.navigate(['/event']); // Replace 'event' with the actual route name
  }

}
