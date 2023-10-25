
import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event/event.service';
import { Event } from '../../../shared/models/Event';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-apply-events',
  templateUrl: './apply-events.component.html',
  styleUrls: ['./apply-events.component.css'],
})
export class ApplyEventsComponent implements OnInit {
  events: Event[] = [];
  selectedEstilo: string | null = null;
  selectedLocal: string | null = null;
  selectedTime: number | null = null;
  selectedUbicacion: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private eventservice: EventService, private filterService: FilterService) { }

  ngOnInit(): void {

    this.filterService.estiloSelected.subscribe((style: string | null) => {
      this.selectedEstilo = style;
      this.applyFilters(this.selectedUbicacion !== null ? this.selectedUbicacion : undefined, this.selectedTime !== null ? this.selectedTime : undefined, this.selectedLocal !== null ? this.selectedLocal : undefined, this.selectedEstilo !== null ? this.selectedEstilo : undefined, 'true');
    });
    this.filterService.localSelected.subscribe((local: string | null) => {
      this.selectedLocal = local;
      this.applyFilters(this.selectedUbicacion !== null ? this.selectedUbicacion : undefined, this.selectedTime !== null ? this.selectedTime : undefined, this.selectedLocal !== null ? this.selectedLocal : undefined, this.selectedEstilo !== null ? this.selectedEstilo : undefined, 'true');
    });
    this.filterService.timeSelected.subscribe((time: number | null) => {
      this.selectedTime = time;
      this.applyFilters(this.selectedUbicacion !== null ? this.selectedUbicacion : undefined, this.selectedTime !== null ? this.selectedTime : undefined, this.selectedLocal !== null ? this.selectedLocal : undefined, this.selectedEstilo !== null ? this.selectedEstilo : undefined, 'true');
    });
    this.filterService.ubicacionSelected.subscribe((ubicacion: string | null) => {
      this.selectedUbicacion = ubicacion;
      this.applyFilters(this.selectedUbicacion !== null ? this.selectedUbicacion : undefined, this.selectedTime !== null ? this.selectedTime : undefined, this.selectedLocal !== null ? this.selectedLocal : undefined, this.selectedEstilo !== null ? this.selectedEstilo : undefined, 'true');
    });
  }

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

  onEventClick(eventId: number) {
    this.router.navigate(['/dashboard-artist/expand-application', eventId], { relativeTo: this.route }); //lo escribi asi pq sino no andaba
  }
}





