import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event/event.service';
import {Event} from '../../../shared/models/Event';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterEstiloService } from 'src/app/services/filter/filter-estilo.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit{

  events: Event[] = [];
  constructor(private eventservice: EventService, private router: Router, public sanitizer: DomSanitizer, private filterEstiloService: FilterEstiloService){}
  selectedEstilo: string | null = null; // To store the selected musical style

  ngOnInit(): void {
    // this.events=this.eventservice.getEvents(); //llama a la funcion getall de los servicios
    this.eventservice.getEvents().subscribe(
      (data: Event[]) => {
        this.events = data; // Update events when data is available
        console.log('events:',data);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );

    this.filterEstiloService.estiloSelected.subscribe((style: string | null) => {
      this.selectedEstilo = style;
      this.applyFilters(undefined,undefined , undefined, this.selectedEstilo !== null ? this.selectedEstilo : undefined);
    });
    
  }
  
  onEventClick(eventId: number) {
    // Navigate to the expanded-event component with the event ID as a parameter
    this.router.navigate(['/expanded-event', eventId]);
  }

  getImageSource(event: Event): any {
    const imageSrc = `${event.picture}`;
    //console.log('Image Source:', imageSrc);
    console.log('Image Source:', event.picture);
    let objectURL = 'data:image/png;base64,' + event.picture;
    let thumbnail = this.sanitizer.bypassSecurityTrustResourceUrl(objectURL);
    return thumbnail;
  }

  applyFilters(neighborhood?: string, timeWindow?: number, business?: string, genre?: string){
    console.log('filtradooooooo');
    // Call the service function to retrieve filtered events
    this.eventservice.getFilteredEvents(neighborhood, timeWindow, business, genre).subscribe(
      (data) => {
        this.events = data;
        console.log('Eventos filtrados: ', this.events);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
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
