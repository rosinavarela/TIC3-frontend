
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
    const id =1111;//este id hay que cambiarlo por el que venga de la pantalla anterior o ruta?
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

}

