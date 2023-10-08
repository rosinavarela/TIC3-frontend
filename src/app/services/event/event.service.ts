import { Injectable } from '@angular/core';
import { Event } from '../../shared/models/Event'
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/* aca vamos a definir lo que tiene el modelo de comida asi cuando lo llamamos trae todo junto */
export class EventService {


  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<any[]>(this.baseURL + 'events').pipe(
      map((response: any[]) => {
        return response.map(eventData => new Event(
          eventData.id,
          eventData.name,
          eventData.date,
          eventData.genre, 
          eventData.time, 
          eventData.business.location,
          eventData.date_limit,
          eventData.paid,
          eventData.artist,
          eventData.picture,
          eventData.applicationDeadline,
          eventData.description,
          eventData.equipment
        ));
      })
    );
  }
}

