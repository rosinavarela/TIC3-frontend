import { Component } from '@angular/core';
import { Artist } from '../shared/models/Artist';
import { Business } from '../shared/models/Business';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  genres = ['pop', 'rock', 'jazz', 'clásic', 'alternativo', 'indie', 'cumbia', 'rap/trap', 'otro'];
  // model = new Artist(1,"artista", "apellido", 123465);
  // artist?: Artist;
  registrationForm: FormGroup;
  userType: string = 'artist'; // Default to 'artist'
  hidePassword: boolean = true; // Add this line to define the property

  constructor() {
    this.registrationForm = new FormGroup({
      userType: new FormControl('artist', Validators.required),
      // Common fields
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      // Artist-specific fields
      artistLastName: new FormControl('', Validators.required),
      artistId: new FormControl('', Validators.required),
      artistDescription: new FormControl(''),
      // Business-specific fields
      businessName: new FormControl(''),
      businessType: new FormControl('')
    });
  }

  toggleUserType(userType: string) {
    this.userType = userType;
  } 

  register() {
    // Handle the registration logic based on the selected user type and form values
    const formData = this.registrationForm.value;
    console.log('Registration data:', formData);
    // Add your registration logic here
  }

  clearInput() {
    // Clear the input field
    
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  checkRegister(){

  }

}
