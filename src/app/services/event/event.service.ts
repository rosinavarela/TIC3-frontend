import { Injectable } from '@angular/core';
import { Event } from '../../shared/models/Event'
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

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
          eventData.neighborhood,
          eventData.description,
          eventData.equipment
        ));
      })
    );
  }

  getUpcomingEventsFromBusiness(id: any): Observable<Event[]> {
    const url = `${this.baseURL}businesses/${id}/events/upcoming`;
    return this.http.get<any[]>(url).pipe(
      map((response: any[]) => {
        if (Array.isArray(response)) {
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
            eventData.neighborhood,
            eventData.description,
            eventData.equipment
          ));
        } else {
          // Handle the case where response is not an array, e.g., return an empty array
          return [];
        }
      })
    )
  }


  createEvent(data: any): Observable<any> {
    const headers = {'content-type': 'application/json'}  
    const body = JSON.stringify(data);
    console.log(body)
    const id = data.id;
    const url = `${this.baseURL}businesses/${id}/events`;
    return this.http.post(url, body, {'headers':headers})
  }

}
/*
import { Injectable } from '@angular/core';
import {Event} from '../../shared/models/Event'

@Injectable({
  providedIn: 'root'
})

//aca vamos a definir lo que tiene el modelo de comida asi cuando lo llamamos trae todo junto
export class EventService {

  constructor() { }

  getAll():Event[]{ //queremos que devuelva objeto food
    const date = new Date('2023-09-30T12:00:00');
    return [
      {
        id:1,
        name:"veni a cantar",
        place:"Bar arocena",
        imageUrl:"/assets/images/events/BarArocena.jpeg",
        date:new Date('2023-09-30T12:00:00'), //o usar solo esto
        //time:new Date(10, 30),//fijarme si esto es solo hora uni fecha y hora
        date_limit: new Date('2023-09-29'),
        payment:true,
        artist: null, 
      },
      {
        id:2,
        name:"veni a cantar",
        place:"Bar arocena",
        imageUrl:"/assets/images/events/BarArocena.jpeg",
        date:new Date('2023-09-30T12:00:00'),
        //time:new Date(10, 30),//fijarme si esto es solo hora uni fecha y hora
        date_limit: new Date('2023-09-29'),
        payment:true,
        artist: null, 
      },
      {
        id:3,
        name:"veni a cantar",
        place:"Bar arocena",
        imageUrl:"/assets/images/events/BarArocena.jpeg",
        date:new Date('2023-09-30T12:00:00'),
        //time:new Date(10, 30),//fijarme si esto es solo hora uni fecha y hora
        date_limit: new Date('2023-09-29'),
        payment:true,
        artist: null, 
      },
      {
        id:3,
        name:"veni a cantar",
        place:"Bar arocena",
        imageUrl:"/assets/images/events/BarArocena.jpeg",
        date:new Date('2023-09-30T12:00:00'),
        //time:new Date(10, 30),//fijarme si esto es solo hora uni fecha y hora
        date_limit: new Date('2023-09-29'),
        payment:true,
        artist: null, 
      },
      {
        id:4,
        name:"veni a cantar",
        place:"Bar arocena",
        imageUrl:"/assets/images/events/BarArocena.jpeg",
        date:new Date('2023-09-30T12:00:00'),
        //time:new Date(10, 30),//fijarme si esto es solo hora uni fecha y hora
        date_limit: new Date('2023-09-29'),
        payment:true,
        artist: null, 
      },
      {
        id:5,
        name:"veni a cantar",
        place:"Bar arocena",
        imageUrl:"/assets/images/events/BarArocena.jpeg",
        date:new Date('2023-09-30T12:00:00'),
        //time:new Date(10, 30),//fijarme si esto es solo hora uni fecha y hora
        date_limit: new Date('2023-09-29'),
        payment:true,
        artist: null, 
      },
      {
        id:6,
        name:"veni a cantar",
        place:"Bar arocena",
        imageUrl:"/assets/images/events/BarArocena.jpeg",
        date:new Date('2023-09-30T12:00:00'),
        //time:new Date(10, 30),//fijarme si esto es solo hora uni fecha y hora
        date_limit: new Date('2023-09-29'),
        payment:true,
        artist: null, 
      },
      {
        id:7,
        name:"veni a cantar",
        place:"Bar arocena",
        imageUrl:"/assets/images/events/BarArocena.jpeg",
        date:new Date('2023-09-30T12:00:00'),
        //time:new Date(10, 30),//fijarme si esto es solo hora uni fecha y hora
        date_limit: new Date('2023-09-29'),
        payment:true,
        artist: null, 
      },
      {
        id:8,
        name:"veni a cantar",
        place:"Bar arocena",
        imageUrl:"/assets/images/events/BarArocena.jpeg",
        date:new Date('2023-09-30T12:00:00'),
        //time:new Date(10, 30),//fijarme si esto es solo hora uni fecha y hora
        date_limit: new Date('2023-09-29'),
        payment:true,
        artist: null, 
      }
    ]
  }

}
*/