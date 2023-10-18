import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  eventForm: FormGroup;

  constructor() {
    this.eventForm = new FormGroup({
      name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      neighborhood: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      genre: new FormControl(''),
      equipment: new FormControl(''),
      payment: new FormControl(false),
      description: new FormControl(''),
    });
  }

onSubmit() {
  console.log(this.eventForm.value);
  // You can send this.eventForm.value to your backend API
}
}
