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

  /*events: Event[] = [];
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
  */
}

/*
The @Component decorator is used to specify metadata for the component, including:

selector: The HTML selector used to include this component in templates.
templateUrl: The URL to the HTML template file.
styleUrls: An array of CSS style files to apply to this component.
The HomeComponent class is defined, implementing the OnInit interface, which requires the implementation of the ngOnInit method.

The constructor takes an instance of FoodService through dependency injection.

The ngOnInit method is defined but empty. This method is called when the component is initialized and is typically used for setting up initial data or making initial requests to services.


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
