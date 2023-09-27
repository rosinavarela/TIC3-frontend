import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event/event.service';
import {Event} from '../shared/models/Event'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  events: Event[] = [];
  constructor(private eventservice: EventService){}

  ngOnInit(): void {
    this.events=this.eventservice.getAll(); //llama a la funcion getall de los servicios
  }
}

/*
The @Component decorator is used to specify metadata for the component, including:

selector: The HTML selector used to include this component in templates.
templateUrl: The URL to the HTML template file.
styleUrls: An array of CSS style files to apply to this component.
The HomeComponent class is defined, implementing the OnInit interface, which requires the implementation of the ngOnInit method.

The constructor takes an instance of FoodService through dependency injection.

The ngOnInit method is defined but empty. This method is called when the component is initialized and is typically used for setting up initial data or making initial requests to services.
*/