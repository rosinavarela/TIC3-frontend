
import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event/event.service';
import {Event} from '../../../shared/models/Event';
import {Application} from '../../../shared/models/Application';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PopUpArtistComponent } from '../pop-up-artist/pop-up-artist.component';
import { MatDialog } from '@angular/material/dialog';
import { BusinessIdService } from 'src/app/services/user/business-id.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-next-events',
  templateUrl: './next-events.component.html',
  styleUrls: ['./next-events.component.css'],
})
export class NextEventsComponent {
  events: Event[] =[];

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router, private matDialog:MatDialog, private businessIdService: BusinessIdService, private snackbar: MatSnackBar) { }

  imagePath: string = "/assets/images/logos/logo.jpeg"

  getSource(event: Event){
    if(event.picture && event.picture !== ""){
      return event.picture;
    } else{
      return this.imagePath;
    }
  }

  ngOnInit(): void{
    this.fetchEvents();
  }

  goToArtist(application:any){
    this.matDialog.open(PopUpArtistComponent,{
      width:'550px',
      height: '300px',
      data: application
    })
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

  fetchEvents() {
    const id = this.businessIdService.getBusinessId();
    this.eventService.getUnassignedEventsFromBusiness(id).subscribe(
      (data: Event[]) => {
        console.log("eventsUnassigned:", data);
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
  
  
  confirmarArtista(event: any, application: any) {
    const artistId = application.artist_id;
    const id =event.id;
    const data = {
      artistId: artistId,
      id: id,
    }
    this.eventService.assignArtistToEvent(data).subscribe(
      (resp) => {
        this.snackbar.open('Artista confirmado', 'Close', {
          duration: 5000, // Duration of the snackbar display (in milliseconds)
        });
        this.fetchEvents();
      },
      (error) => {
        console.error('Errorrrrr:', error);
        if (error.status === 500) {
          this.snackbar.open('Ocurrió un error, intente de nuevo', 'Close', {
            duration: 5000, // Duration of the snackbar display (in milliseconds)
          });
        }
      }
    );
  }

}

