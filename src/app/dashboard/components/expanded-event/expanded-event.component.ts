import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-expanded-event',
  templateUrl: './expanded-event.component.html',
  styleUrls: ['./expanded-event.component.css']
})
export class ExpandedEventComponent {

  link: string | null = null; 
  event: any = {
    picture: of('/assets/images/logos/foto.jpeg'),
  };
  eventImageSource: string = '';
  imagePath: string = '../../../assets/images/logos/foto.jpeg';
  
  getSource(event: any){
    if(event.picture){
      return event.picture;
    } else{
      return this.imagePath;
    }
  }

  constructor(private router: Router, private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    // Retrieve the eventId parameter from the route
    const eventId = this.route.snapshot.params['eventId'];

    this.eventService.getEventById(eventId).subscribe(
      (data: any) => {
        this.event = data;
        // Calculate the image source and store it in eventImageSource
      this.eventImageSource = this.getImageSource(this.event);
      this.link = data.business.webPage;
      console.log('link: ', this.link);
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

      /*const buffer = new Uint8Array(event.picture.data);
      const blob = new Blob([buffer], { type: 'image/png' }); // Set the appropriate image type

      const reader = new FileReader();
      reader.readAsDataURL(blob);

      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });*/
      /*const buffer = event.picture.data as number[]; // Convert to a number array
      const base64 = btoa(String.fromCharCode.apply(null, buffer)); // Convert to base64
      const mimeType = 'image/*'; // Replace with the appropriate image type (e.g., 'image/jpeg', 'image/png', etc.)
      return `data:${mimeType};base64,${base64}`;*/
    }

    // If the picture format is not as expected, return a default image source
    return '/assets/images/logos/foto.jpeg';
  }


  goBackToEvent() {
    this.router.navigate(['/dashboard/event'], { relativeTo: this.route });
  }

  goToArtist() {
    this.router.navigate(['/dashboard/artist-profile-event',this.event.id,this.event.artist.id], { relativeTo: this.route });
  }
}
