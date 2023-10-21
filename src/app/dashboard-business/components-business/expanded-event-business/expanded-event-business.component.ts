import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-expanded-event-business',
  templateUrl: './expanded-event-business.component.html',
  styleUrls: ['./expanded-event-business.component.css']
})
export class ExpandedEventBusinessComponent {

  constructor(private router: Router,private route: ActivatedRoute){ }

  goBackToEvent() {
    this.router.navigate(['dashboard-business/event'], { relativeTo: this.route });; 
  }

}
