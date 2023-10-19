import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event/event.service';
import {Event} from '../../../shared/models/Event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit{

  events: Event[] = [];
  constructor(private eventservice: EventService, private router: Router){}

  ngOnInit(): void {
    // this.events=this.eventservice.getEvents(); //llama a la funcion getall de los servicios
    this.eventservice.getEvents().subscribe(
      (data: Event[]) => {
        this.events = data; // Update events when data is available
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
  
  onEventClick(eventId: number) {
    // Navigate to the expanded-event component with the event ID as a parameter
    this.router.navigate(['/expanded-event', eventId]);
  }
}
/*


import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event/event.service';
import {Event} from '../../../shared/models/Event';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit{

  events: Event[] = [];
  constructor(private eventservice: EventService, private router: Router){}

  ngOnInit(): void {
    this.events=this.eventservice.getAll(); //llama a la funcion getall de los servicios
  }

  onEventClick(eventId: number) {
    // Navigate to the expanded-event component with the event ID as a parameter
    this.router.navigate(['/expanded-event', eventId]);
  }
}
*/
