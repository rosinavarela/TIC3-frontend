import { Component } from '@angular/core';
import { Artist } from '../shared/models/Artist';
import { Business } from '../shared/models/Business';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { RegisterService } from '../services/register/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  genres = ['pop', 'rock', 'jazz', 'clásic', 'alternativo', 'indie', 'cumbia', 'rap/trap', 'otro'];
  registrationForm: FormGroup;
  userType: string = 'artist'; // Default to 'artist'
  hidePassword1: boolean = true;
  hidePassword2: boolean = true;

  constructor(private registerService: RegisterService) {
    this.registrationForm = new FormGroup({
      userType: new FormControl('artist', Validators.required),
      // Common fields
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      // Artist-specific fields
      lastName: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      // Business-specific fields
      legalName: new FormControl('', Validators.required),
      rut: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }

  toggleUserType(userType: string) {
    this.userType = userType;
  }   

  checkControlValidity(controlName: string): boolean {
    const control = this.registrationForm.get(controlName);
    if (control) {
      const isValid = control.valid;
      //console.log(`Control '${controlName}' validity:`, isValid);
      return isValid;
    }
    return true; // Control not found (assumed valid)
  }

  register() {
    // Handle the registration logic based on the selected user type and form values
    const formData = this.registrationForm.value;
    console.log('Registration data:', formData);
    this.registerService.registerArtist(formData).subscribe(
      (resp) => {
        console.log('response:', resp )
      }
    )
  }

  clearInput() {
    this.registrationForm.get('email')?.setValue('');
    this.registrationForm.get('password')?.setValue('');
    this.registrationForm.get('name')?.setValue('');
    this.registrationForm.get('password2')?.setValue(''); 
    this.registrationForm.get('phone')?.setValue('');
  
    if (this.userType === 'artist') {
      this.registrationForm.get('lastName')?.setValue('');
      this.registrationForm.get('id')?.setValue('');
      
    } else {
      this.registrationForm.get('rut')?.setValue('');
      this.registrationForm.get('location')?.setValue('');
      this.registrationForm.get('legalName')?.setValue('');
      this.registrationForm.get('description')?.setValue('');
    }
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    console.log("apreté siguiente")
  }


}
