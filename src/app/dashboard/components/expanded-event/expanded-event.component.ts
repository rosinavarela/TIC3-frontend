import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expanded-event',
  templateUrl: './expanded-event.component.html',
  styleUrls: ['./expanded-event.component.css']
})
export class ExpandedEventComponent {

  constructor(private router: Router) { }

  goBackToEvent() {
    this.router.navigate(['/event']); // Replace 'event' with the actual route name
  }

}
