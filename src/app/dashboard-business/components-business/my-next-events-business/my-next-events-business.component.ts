
import { Component, OnInit } from '@angular/core';
import { RippleGlobalOptions } from '@angular/material/core';
import {EventService} from '../../../services/event/event.service';
import {Event} from '../../../shared/models/Event';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

const globalRippleConfig: RippleGlobalOptions = { //ver bien como se hace esto para desactivar el efecto cuando apretas
  disabled: true,
  animation: {
    enterDuration: 0,
    exitDuration: 0
  }
};

@Component({
  selector: 'app-my-next-events-business',
  templateUrl: './my-next-events-business.component.html',
  styleUrls: ['./my-next-events-business.component.css'],
})
export class MyNextEventsBusinessComponent {
  events: any[] =[];

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  imagePath: string = "../../../assets/images/logos/logo.jpeg"

  getSource(event: any){
    if(event.picture){
      return event.picture;
    } else{
      return this.imagePath;
    }
  }
  ngOnInit(): void{
    const id =224;//este id hay que cambiarlo por el que venga de la pantalla anterior o ruta?
    this.eventService.getUpcomingEventsFromBusiness(id).subscribe(
      (data: Event[]) => {
        console.log("upcomingEvents:", data)
        this.events = data; 
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );

    console.log("Eventos: "+this.events);
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

