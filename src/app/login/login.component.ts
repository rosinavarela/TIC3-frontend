import { Component } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { User } from '../shared/models/User';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Artist } from '../shared/models/Artist'
import { Business } from '../shared/models/Business';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  loginMessage?: string;
  user?: User;
  artist?: Artist;
  business?: Business;
  hide: boolean = true; // Variable para controlar la visibilidad de la contraseña

  constructor(private matDialog:MatDialog, private loginService: LoginService, private snackBar: MatSnackBar, private router: Router, private dialogRef: MatDialogRef<LoginComponent>) {

  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  formValid() {
    return this.emailFormControl.valid && this.passwordFormControl.valid;
  }

  goToPage(pageName: string){
    //podria hacer un if para ver a que pagina quiere ir
    this.matDialog.open(RegisterComponent,{
      width:'900px',
      height: '675px'
    })
  }

  clearInput() {
    // Clear the input field
    this.email = '';
    this.password = '';
    this.loginMessage = '';
  }

  checkLogin() {
    const user = { email: this.email, password: this.password };//ver si cambiar esto a model user o no
    this.loginService.checkUser(user).subscribe(
      (data) => {
        // Handle success
        if (data.type === null) {
          this.loginMessage = data.message;
        }
        else if (data.type === "artist") {
          try {
            let jsonUser = data.user;
            if (jsonUser && typeof jsonUser === 'object') {
              this.artist = jsonUser
            } else {
              console.error('Invalid JSON data or not an object:', jsonUser);
            }
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
          this.router.navigate(['/dashboard-artist', data.user.id]);
          this.dialogRef.close();

        } else if (data.type === "business") {
          try {
            let jsonUser = data.user;
            if (jsonUser && typeof jsonUser === 'object') {
              this.business = jsonUser
            } else {
              console.error('Invalid JSON data or not an object:', jsonUser);
            }
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
          this.router.navigate(['/dashboard-business', data.user.rut]);
          this.dialogRef.close();
        }
        
      },
      (error) => {
        // Handle error
        console.error('Error:', error);
        // Display an error message to the user
        this.snackBar.open('An error occurred', 'Close', {
          duration: 3000, // Duration of the snackbar display (in milliseconds)
          panelClass: ['custom-snackbar'] // Apply the custom class to change style (no funcionaaaaa)
        });
      }
    );
  }

}
