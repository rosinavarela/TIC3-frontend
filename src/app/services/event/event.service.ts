import { Injectable } from '@angular/core';
import {Event} from '../../shared/models/Event'

@Injectable({
  providedIn: 'root'
})

/* aca vamos a definir lo que tiene el modelo de comida asi cuando lo llamamos trae todo junto */
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
      }
      
    ]
  }

}

