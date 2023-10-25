
import { Component, OnInit } from '@angular/core';
import { RippleGlobalOptions } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';
import { Event } from '../../../shared/models/Event'

const globalRippleConfig: RippleGlobalOptions = { //ver bien como se hace esto para desactivar el efecto cuando apretas
  disabled: true,
  animation: {
    enterDuration: 0,
    exitDuration: 0
  }
};

@Component({
  selector: 'app-my-next-events',
  templateUrl: './my-next-events.component.html',
  styleUrls: ['./my-next-events.component.css'],
})
export class MyNextEventsComponent {
  events: any[] =[];
  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void{
    const id =1;//este id hay que cambiarlo por el que venga de la pantalla anterior o ruta?
    this.eventService.getUpcomingEventsFromArtist(id).subscribe(
      (data) => {
        this.events = data; 
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  formatTime(time: string | null): string {
    if (time && typeof time === 'string') {
      const timeParts = time.split(':'); // Split the time string
      if (timeParts.length >= 2) {
        return timeParts[0] + ':' + timeParts[1]; // Format as "HH:mm"
      }
    }
    return time || ''; // Return the original time if it's not in the expected format
  }
}

