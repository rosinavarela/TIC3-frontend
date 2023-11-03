import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event/event.service';
import { BusinessIdService } from 'src/app/services/user/business-id.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent {
  imageSelected: boolean = false;
  selectedImage: string | undefined;
  failureMessage?: string;

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const previewImage = document.getElementById('previewImage') as HTMLImageElement;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = () => {
        this.imageSelected = true;

        const base64DataUrl = reader.result as string;
        this.selectedImage = base64DataUrl;

        this.createEventForm.patchValue({
          picture: base64DataUrl.slice(22),
        });
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

  constructor(private dateAdapter: DateAdapter<Date>, private eventService: EventService, private businessIdService: BusinessIdService, private snackbar: MatSnackBar) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.createEventForm = new FormGroup({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      paid: new FormControl(''),
      location: new FormControl('', Validators.required),
      neighborhood: new FormControl('', Validators.required),
      description: new FormControl(''),
      genrePreffered: new FormControl(''),
      equipment: new FormControl(''),
      picture: new FormControl(''),
    });
  }

  createEvent() {
    const formData = this.createEventForm.value;
    formData.id = this.businessIdService.getBusinessId();
    console.log('Create event data:', formData);
    this.eventService.createEvent(formData).subscribe(
      (resp) => {
        console.log('response:', resp)
        this.snackbar.open('Evento creado', 'Close', {
          duration: 5000, // Duration of the snackbar display (in milliseconds)
        });
        this.failureMessage = '';
      },
      (error) => {
        console.error('Errorrrrr:', error);
        if (error.status === 404) {
          this.failureMessage = error.error.message;
          this.clearInput();
        } else if (error.status === 500) {
          this.failureMessage = 'Ocurrió un error, intente de nuevo';
          this.clearInput();
        }
      }
    );
    this.clearInput();
  }

  clearInput() {
    console.log('Before reset:', this.createEventForm.value);
    this.createEventForm.reset(); // This will clear all form controls and reset their states.
    console.log('After reset:', this.createEventForm.value);
    /*this.createEventForm.get('name')?.setValue('');
    this.createEventForm.get('date')?.setValue('');
    this.createEventForm.get('time')?.setValue('');
    this.createEventForm.get('paid')?.setValue('');
    this.createEventForm.get('location')?.setValue('');
    this.createEventForm.get('neighborhood')?.setValue('');
    this.createEventForm.get('description')?.setValue('');
    this.createEventForm.get('equipment')?.setValue('');
    this.createEventForm.get('genrePreffered')?.patchValue(null);
    */
    
    this.clearSelectedImage();
    this.createEventForm.markAsPristine(); // Mark the form as pristine
    this.createEventForm.markAsUntouched(); // Mark the form as untouched
    Object.keys(this.createEventForm.controls).forEach((key) => { //para resetear los errores
      const control = this.createEventForm.controls[key];
      control.setErrors(null);
  });
  }

  clearSelectedImage() {
    this.selectedImage = '';
    this.imageSelected = false;

    this.createEventForm.patchValue({
      picture: null,
    });

    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  checkControlValidity(controlName: string): boolean {
    const control = this.createEventForm.get(controlName);
    if (control) {
      const isValid = control.valid;
      return isValid;
    }
    return true; // Control not found (assumed valid)
  }
  isButtonDisabled(): boolean {

    return !this.checkControlValidity('name') || !this.checkControlValidity('date') || !this.checkControlValidity('time') || !this.checkControlValidity('paid') || !this.checkControlValidity('location') || !this.checkControlValidity('neighborhood');
  }

}
