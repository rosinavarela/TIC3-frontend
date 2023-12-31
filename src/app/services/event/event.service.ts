
import { Injectable } from '@angular/core';
import { Event } from '../../shared/models/Event'
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})

export class EventService {


  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<any[]>(this.baseURL + 'events').pipe(
      map((response: any[]) => {
        console.log(response);
        

        return response.map(eventData => new Event(
          eventData.id,
          eventData.name,
          eventData.date,
          eventData.genrePreffered,
          eventData.time,
          eventData.location,
          eventData.paid,
          eventData.artist,
          eventData.picture,
          eventData.neighborhood,
          eventData.description,
          eventData.equipment
        ));

        
      })
    );
  }

  // Function to convert a Node.js Buffer to a base64-encoded string
  private bufferToBase64(buffer: Buffer): string {
    return `${buffer.toString('base64')}`;
  }

  getUnassignedEventsFromBusiness(id: any): Observable<Event[]> {//REVISAR
    const url = `${this.baseURL}businesses/${id}/events/unassigned`;
    return this.http.get<any[]>(url).pipe(
      map((response: any[]) => {
        console.log(response);
        if (Array.isArray(response)) {
          return response.map((eventData: any) => {
            return new Event(
            eventData.id,
            eventData.name,
            eventData.date,
            eventData.genrePreffered,
            eventData.time,
            eventData.location,
            eventData.paid,
            eventData.artist,
            eventData.picture,
            eventData.neighborhood,
            eventData.description,
            eventData.equipment,
            eventData.applications
          )});
        } else {
          // Handle the case where response is not an array, e.g., return an empty array
          return [];
        }
      })
    )
  }

  getUpcomingEventsFromBusiness(id: any): Observable<any[]> {
    const url = `${this.baseURL}businesses/${id}/events/upcoming`;
    return this.http.get<any[]>(url).pipe(
      map((response: any[]) => {
        console.log(response);
        if (Array.isArray(response)) {
          return response.map((eventData: any) => {
            return new Event(
            eventData.id,
            eventData.name,
            eventData.date,
            eventData.genrePreffered,
            eventData.time,
            eventData.location,
            eventData.paid,
            eventData.artist,
            eventData.picture,
            eventData.neighborhood,
            eventData.description,
            eventData.equipment,
          )});
        } else {
          // Handle the case where response is not an array, e.g., return an empty array
          return [];
        }
      })
    )
  }

  createEvent(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);
    console.log(body)
    let id = data.id;
    const url = `${this.baseURL}businesses/${id}/events`;
    return this.http.post(url, body, { 'headers': headers })
  }

  getBusinessNames(): Observable<string[]> {
    return this.http.get<{ businessesNames: { name: string }[] }>(`${this.baseURL}businesses/names`).pipe(
      map((response) => response.businessesNames.map((business) => business.name))
    );
  }

  getNeighborhoodOfEvents(): Observable<string[]> {
    return this.http.get<any>(`${this.baseURL}events/neighborhoods`).pipe(
      map((response) => {
        return response.neighborhoods.map((neighborhood: any) => neighborhood.neighborhood);
      })
    );
  }


  getFilteredEvents(neighborhood?: string, timeWindow?: number, business?: string, genre?: string, unassigned?: string): Observable<Event[]> {
    const queryParams: any = {};
    if (neighborhood) {
      queryParams.neighborhood = neighborhood;
    }

    if (timeWindow) {
      queryParams.timeWindow = timeWindow;
    }

    if (business) {
      queryParams.business = business;
    }

    if (genre) {
      queryParams.genre = genre;
    }
    if (unassigned) {
      queryParams.unassigned = unassigned;
    }

    return this.http.get<any[]>(`${this.baseURL}events/filter`, { params: queryParams }).pipe(
      map((data: any[]) => {
        if (Array.isArray(data)) {
          return data.map((eventData: any) => {
            return new Event(
              eventData.id,
              eventData.name,
              new Date(eventData.date),
              eventData.genrePreffered,
              eventData.time,
              eventData.location,
              eventData.paid,
              eventData.artist,
              eventData.picture,
              eventData.neighborhood,
              eventData.description,
              eventData.equipment
            );
          });
        } else {
          // Handle the case where response is not an array, e.g., return an empty array
          return [];
        }
      })
    );
  }

  getEventById(eventId: string): Observable<any> {
    const url = `${this.baseURL}events/${eventId}`;
    return this.http.get<any>(url);
  }

  getUpcomingEventsFromArtist(id: any): Observable<any[]> {
    const url = `${this.baseURL}artists/${id}/events/upcoming`;
    return this.http.get<any[]>(url);
  }


  createApplication(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);
    let id = data.id;//id del negocio
    const url = `${this.baseURL}events/${id}/application`;
    return this.http.post(url, body, { 'headers': headers })
  }

  assignArtistToEvent(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);
    let id = data.id;//id del evento
    const url = `${this.baseURL}events/${id}/selection`;
    return this.http.post(url, body, { 'headers': headers })
  }
}
