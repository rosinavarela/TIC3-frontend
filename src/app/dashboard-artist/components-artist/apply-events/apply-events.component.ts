
import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event/event.service';
import {Event} from '../../../shared/models/Event';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-events',
  templateUrl: './apply-events.component.html',
  styleUrls: ['./apply-events.component.css'],
})
export class ApplyEventsComponent{

  constructor(private router: Router, private route: ActivatedRoute) {}

  onEventClick() {
    this.router.navigate(['/dashboard-artist/expand-application'], { relativeTo: this.route }); //lo escribi asi pq sino no andaba
  }
}



 

