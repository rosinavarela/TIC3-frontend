
import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event/event.service';
import {Event} from '../../../shared/models/Event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-events',
  templateUrl: './apply-events.component.html',
  styleUrls: ['./apply-events.component.css'],
})
export class ApplyEventsComponent{

  onEventClick() {//pasarle event-id tmb
    this.router.navigate(['/expand-application']); 
  }

  constructor(private router: Router){}

}



 

