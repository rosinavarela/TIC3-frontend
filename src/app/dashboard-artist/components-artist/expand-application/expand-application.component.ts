import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopUpApplicationComponent } from '../pop-up-application/pop-up-application.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-expand-application',
  templateUrl: './expand-application.component.html',
  styleUrls: ['./expand-application.component.css']
})
export class ExpandApplicationComponent {
  link: string = "wwww.google.com" //aca poner el link del lugar
  event: any = {
    picture: of('/assets/images/logos/foto.jpeg'),
  };
  eventImageSource: string = '';
  eventId: string = '';
  artistId: number = 1;

  imagePath: string = "../../../assets/images/logos/logo.jpeg"

  getSource(){
    if(this.event.picture && this.event.picture !== ""){
      return this.event.picture;
    } else{
      return this.imagePath;
    }
  }

  constructor(private router: Router, private matDialog:MatDialog,private route: ActivatedRoute, private eventService: EventService){ }

  ngOnInit() {
    // Retrieve the eventId parameter from the route
    this.eventId = this.route.snapshot.params['eventId'];
    //this.artistId = lo que corresponda cuando hagamos el flujo de login

    this.eventService.getEventById(this.eventId).subscribe(
      (data: any) => {
        this.event = data;
        this.eventImageSource = this.getImageSource(this.event);
      },
      (error) => {
        console.error('Error fetching event:', error);
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

  getImageSource(event: any): any {
    if (event.picture && event.picture.type === 'Buffer' && Array.isArray(event.picture.data)) {
      const buffer = event.picture.data; // Extract the image data from the Buffer
      const arrayBuffer = new Uint8Array(buffer).buffer; // Convert the array to an ArrayBuffer
      const blob = new Blob([arrayBuffer], { type: 'image/png' });
      const objectURL = URL.createObjectURL(blob);
      return objectURL;
    }
  }

  goBackToEvent() {
    this.router.navigate(['/dashboard-artist/apply-events'], { relativeTo: this.route });; 
  }

  applyEvent(){
    const data = {
      eventId: this.eventId,
      artistId: this.artistId,
    }
    this.matDialog.open(PopUpApplicationComponent,{
      width: '25%',
      data: data,
    })
  }
  
}
