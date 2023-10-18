import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent {
  imageSelected: boolean = false;
  selectedImage: string | undefined;

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const previewImage = document.getElementById('previewImage') as HTMLImageElement;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = () => {
        this.selectedImage = reader.result as string;
        this.imageSelected = true;
      };

      reader.readAsDataURL(fileInput.files[0]);
    } else {
      this.selectedImage = '';
      this.imageSelected = false;
    }
  }

  dateFilter = (date: Date | null): boolean => {
    if (date === null) {
      // Handle the case where the date is null (e.g., when the input is empty)
      return false;
    }
  
    const today = new Date();
    return date >= today;
  };

  createEventForm: FormGroup;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.createEventForm = new FormGroup({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      payment: new FormControl('', Validators.required),
    });
  }

  createEvent(){
  }
  

onSubmit() {
  // You can send this.eventForm.value to your backend API
}
}
