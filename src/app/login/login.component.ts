import { Component } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { User } from '../shared/models/User';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private loginService: LoginService, private snackBar: MatSnackBar) {

  }

  clearInput() {
    // Clear the input field
    this.email = '';
    this.password = '';
  }

  checkLogin() {
    console.log("function called");
    console.log(this.email);
    console.log(this.password);
    const user = { email: this.email, password: this.password };//ver si cambiar esto a model user o no
    console.log(user);
    this.loginService.checkUser(user).subscribe(
      (data) => {
        // Handle success
        console.log('Response:', data);
        if (data.type == null) {
          this.loginMessage = data.message;
        }
        else if (data.type == "artist") {
          try {
            let jsonUser = data.user;
            if (jsonUser && typeof jsonUser === 'object') {
              this.user = new User();
              this.user.email = jsonUser.email
              this.user.password = jsonUser.password
              console.log('user:', this.user); // Use "this.user" to access the property
            } else {
              console.error('Invalid JSON data or not an object:', jsonUser);
            }
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
          //definir
        } else if (data.type == "business") {
          //definir 
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
