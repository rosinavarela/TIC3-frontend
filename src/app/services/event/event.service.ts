
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
        /*return response.map(eventData => {
          if (eventData.picture !==null) {
            console.log('event.picture', eventData.picture);
            console.log('event.picture.data', eventData.picture.data);
            return new Event(
              eventData.id,
              eventData.name,
              eventData.date,
              eventData.genre,
              eventData.time,
              eventData.location,
              eventData.paid,
              eventData.artist,
              eventData.picture.data, // Updated with base64 image data
              eventData.neighborhood,
              eventData.description,
              eventData.equipment
            );
          }else{
            return new Event(
              eventData.id,
              eventData.name,
              eventData.date,
              eventData.genre,
              eventData.time,
              eventData.location,
              eventData.paid,
              eventData.artist,
              eventData.picture, // Updated with base64 image data
              eventData.neighborhood,
              eventData.description,
              eventData.equipment
            );
          }
          
        });*/

        return response.map(eventData => new Event(
          eventData.id,
          eventData.name,
          eventData.date,
          eventData.genre,
          eventData.time,
          eventData.location,
          eventData.paid,
          eventData.artist,
          eventData.picture, 
          eventData.neighborhood,
          eventData.description,
          eventData.equipment
        ));
      
        /*return response.map(eventData => {
          if(eventData.picture !== null){
            const base64Picture = this.bufferToBase64(eventData.picture.data); // Convert Buffer to base64
            eventData.picture = base64Picture; // Replace the Buffer with base64 image data
          }
          return new Event(
            eventData.id,
            eventData.name,
            eventData.date,
            eventData.genre,
            eventData.time,
            eventData.location,
            eventData.paid,
            eventData.artist,
            eventData.picture, // Updated with base64 image data
            eventData.neighborhood,
            eventData.description,
            eventData.equipment
          );
        });*/
      })
    );
  }

  // Function to convert a Node.js Buffer to a base64-encoded string
  private bufferToBase64(buffer: Buffer): string {
    return `${buffer.toString('base64')}`;
  }

  getUpcomingEventsFromBusiness(id: any): Observable<Event[]> {//REVISAR
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
            eventData.location,
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
    let id = data.id;
    id = 224;   //cambiar esto cuando hagamos el flow de login!!!!!!!!
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