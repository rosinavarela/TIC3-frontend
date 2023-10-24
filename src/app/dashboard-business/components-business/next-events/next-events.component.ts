
import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event/event.service';
import {Event} from '../../../shared/models/Event';
import {Application} from '../../../shared/models/Application';
import { Router } from '@angular/router';
import { RippleGlobalOptions } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

const globalRippleConfig: RippleGlobalOptions = { //ver bien como se hace esto para desactivar el efecto cuando apretas
  disabled: true,
  animation: {
    enterDuration: 0,
    exitDuration: 0
  }
};

@Component({
  selector: 'app-next-events',
  templateUrl: './next-events.component.html',
  styleUrls: ['./next-events.component.css'],
})
export class NextEventsComponent {
  events: Event[] =[];

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void{
    const id =224;//este id hay que cambiarlo por el que venga de la pantalla anterior o ruta?
    this.eventService.getUnassignedEventsFromBusiness(id).subscribe(
      (data: Event[]) => {
        console.log("eventsUnassigned:", data)
        this.events = data; 
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );

    console.log("Eventos: "+this.events);
  }

  goToArtist(){
    this.router.navigate(['/dashboard-business/artist-profile-business'],{ relativeTo: this.route });
  }
}

