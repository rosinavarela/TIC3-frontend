import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event/event.service';
import { Event } from '../../../shared/models/Event';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterService } from 'src/app/services/filter/filter.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {

  events: Event[] = [];
  constructor(private eventservice: EventService, private router: Router, public sanitizer: DomSanitizer, private route: ActivatedRoute, private filterService: FilterService) { }
  selectedEstilo: string | null = null;
  selectedLocal: string | null = null;
  selectedTime: number | null = null;
  selectedUbicacion: string | null = null;
  imagePath: string = "/assets/images/logos/logo.jpeg"

  getSource(event: Event){
    if(event.picture){
      return event.picture;
    } else{
      return this.imagePath;
    }
  }

  ngOnInit(): void {
    // this.events=this.eventservice.getEvents(); //llama a la funcion getall de los servicios
    this.eventservice.getEvents().subscribe(
      (data: Event[]) => {
        this.events = data; // Update events when data is available
        console.log('events:', data);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );

    this.filterService.estiloSelected.subscribe((style: string | null) => {
      this.selectedEstilo = style;
      this.applyFilters(this.selectedUbicacion !== null ? this.selectedUbicacion : undefined, this.selectedTime !== null ? this.selectedTime : undefined, this.selectedLocal !== null ? this.selectedLocal : undefined, this.selectedEstilo !== null ? this.selectedEstilo : undefined);
    });
    this.filterService.localSelected.subscribe((local: string | null) => {
      this.selectedLocal = local;
      this.applyFilters(this.selectedUbicacion !== null ? this.selectedUbicacion : undefined, this.selectedTime !== null ? this.selectedTime : undefined, this.selectedLocal !== null ? this.selectedLocal : undefined, this.selectedEstilo !== null ? this.selectedEstilo : undefined);
    });
    this.filterService.timeSelected.subscribe((time: number | null) => {
      this.selectedTime = time;
      this.applyFilters(this.selectedUbicacion !== null ? this.selectedUbicacion : undefined, this.selectedTime !== null ? this.selectedTime : undefined, this.selectedLocal !== null ? this.selectedLocal : undefined, this.selectedEstilo !== null ? this.selectedEstilo : undefined);
    });
    this.filterService.ubicacionSelected.subscribe((ubicacion: string | null) => {
      this.selectedUbicacion = ubicacion;
      this.applyFilters(this.selectedUbicacion !== null ? this.selectedUbicacion : undefined, this.selectedTime !== null ? this.selectedTime : undefined, this.selectedLocal !== null ? this.selectedLocal : undefined, this.selectedEstilo !== null ? this.selectedEstilo : undefined);
    });


  }

  onEventClick(eventId: number) {
    // Navigate to the expanded-event component with the event ID as a parameter
    this.router.navigate(['/dashboard/expanded-event', eventId], { relativeTo: this.route });
  }

  /*getImageSource(event: Event): any {
    const imageSrc = `${event.picture}`;
    //console.log('Image Source:', imageSrc);
    console.log('Image Source:', event.picture);
    let objectURL = 'data:image/png;base64,' + event.picture;
    let thumbnail = this.sanitizer.bypassSecurityTrustResourceUrl(objectURL);
    return thumbnail;
  }*/

  applyFilters(neighborhood?: string, timeWindow?: number, business?: string, genre?: string, unassigned?: string) {
    this.eventservice.getFilteredEvents(neighborhood, timeWindow, business, genre, unassigned).subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
}



