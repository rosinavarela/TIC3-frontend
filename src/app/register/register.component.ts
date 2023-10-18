import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register/register.service';
import { MatDialog } from '@angular/material/dialog';
import { ArtistProfileComponent } from '../artist-profile/artist-profile.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm: FormGroup;
  userType: string = 'artist'; // Default to 'artist'
  hidePassword1: boolean = true;
  hidePassword2: boolean = true;
  failureMessage?: string;

  constructor(private registerService: RegisterService, private matDialog: MatDialog, public dialogRef: MatDialogRef<RegisterComponent> // Inject MatDialogRef
  ) {
    this.registrationForm = new FormGroup({
      userType: new FormControl('artist', Validators.required),
      // Common fields
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      terms: new FormControl(false, Validators.requiredTrue),
      // Artist-specific fields
      lastName: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      // Business-specific fields
      legalName: new FormControl('', Validators.required),
      rut: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      description: new FormControl(''),
      webPage: new FormControl(''),
    });
  }

  toggleUserType(userType: string) {
    this.userType = userType;
  }

  checkControlValidity(controlName: string): boolean {
    const control = this.registrationForm.get(controlName);
    if (control) {
      const isValid = control.valid;
      return isValid;
    }
    return true; // Control not found (assumed valid)
  }

  /*register() {//descomentar esta funcion. 
    // Handle the registration logic based on the selected user type and form values
  
    register() {
    const formData = this.registrationForm.value;
    console.log('Registration data:', formData);
    if (formData.password !== formData.password2) {
      // Passwords don't match, handle the error as you like (e.g., show an error message)
      this.failureMessage = 'Las contraseñas no coinciden';
    } else {
      let resp: any;
      if (this.userType === 'artist') {
        this.registerService.registerArtist(formData).subscribe(
          (response) => {
            resp = response;
            console.log('response:', response);
            this.matDialog.open(ArtistProfileComponent, {
              width: '900px',
              height: '650px',
              data: resp
            })
          },
          (error) => {
            console.error('Errorrrrr:', error);
            if (error.status === 409) {
              this.failureMessage = error.error.message;
              this.clearInput();
            } else if (error.status === 500) {
              this.failureMessage = 'Ocurrió un error, intente de nuevo';
              this.clearInput();
            }
          }
        );

        this.dialogRef.close();
      } else {
        this.registerService.registerBusiness(formData).subscribe(
          (resp) => {
            console.log('response:', resp)
          },
          (error) => {
            console.error('Errorrrrr:', error);
            if (error.status === 409) {
              this.failureMessage = error.error.message;
              this.clearInput();
            } else if (error.status === 500) {
              this.failureMessage = 'Ocurrió un error, intente de nuevo';
              this.clearInput();
            }
          }
        );
      }
    }

  }

  */
  register() { //volver a comentar esta funcion, lo cambio rosi para que le ande en la base de datos
    if (this.userType === 'artist') {
      this.matDialog.open(ArtistProfileComponent, {
        width: '900px',
        height: '650px'
      })
      this.dialogRef.close();
    }
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
      this.registrationForm.get('webPage')?.setValue('');
    }
  }

  isButtonDisabled(): boolean {
    if (this.userType === 'artist') {
      return !this.checkControlValidity('email') || !this.checkControlValidity('password') || !this.checkControlValidity('password2') || !this.checkControlValidity('name') || !this.checkControlValidity('lastName') || !this.checkControlValidity('id') || !this.checkControlValidity('phone') || !this.registrationForm.get('terms')?.value;
    } else if (this.userType === 'business') {
      return !this.checkControlValidity('email') || !this.checkControlValidity('password') || !this.checkControlValidity('password2') || !this.checkControlValidity('name') || !this.checkControlValidity('rut') || !this.checkControlValidity('legalName') || !this.checkControlValidity('phone') || !this.checkControlValidity('location') || !this.checkControlValidity('description') || !this.registrationForm.get('terms')?.value;
    }
    // Return false by default if userType is not 'artist' or 'business'
    return false;
  }


}
