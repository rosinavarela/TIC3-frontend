
import { Component, OnInit } from '@angular/core';
import { RippleGlobalOptions } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';
import { Event } from '../../../shared/models/Event'
import { ArtistIdService } from 'src/app/services/user/artist-id.service';

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
export class MyNextEventsComponent implements OnInit {
  events: any[] = [];
  imagePath: string = "../../../assets/images/logos/logo.jpeg"
  id: number = 0;
  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router, private artistIdService: ArtistIdService) {
    this.id = this.artistIdService.getArtistId();
  }

  getSource(event: any) {
    if (event.picture && event.picture !== "") {
      return event.picture;
    } else {
      return this.imagePath;
    }
  }


  ngOnInit(): void {
    const id =this.id;//este id hay que cambiarlo por el que venga de la pantalla anterior o ruta?

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

