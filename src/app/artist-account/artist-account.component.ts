import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-artist-account',
  templateUrl: './artist-account.component.html',
  styleUrls: ['./artist-account.component.css']
})
export class ArtistAccountComponent {
  //aca irian los datos iniciales, antes de modificar, que hay que traer del backend
  name: string = 'Name'; 
  lastName: string = 'Last name';
  id: string = 'cedula';
  phone: string = 'Phone';
  mail: string = 'mail';
  password: string = 'password';
  password2: string = 'password';

  //esta parte es para ver si el nombre cambio para poder ponerlo en el popup
  isNameChanged = false;
  initialName: string;
  isLastNameChanged = false;
  initialLastName: string;
  isIdChanged = false;
  initialId: string;
  isPhoneChanged = false;
  initialPhone: string;
  isMailChanged = false;
  initialMail: string;
  isPasswordChanged = false;
  initialPassword: string;
  isPassword2Changed = false;
  initialPassword2: string;


  hidePassword1: boolean = true;
  hidePassword2: boolean = true;


  onNameChange() {
    if (this.name !== this.initialName) {
      this.isNameChanged = true;
    }
    else{
      this.isNameChanged = false;
    }
  }

  onLastNameChange() {
    if (this.lastName !== this.initialLastName) {
      this.isLastNameChanged = true;
    }
    else{
      this.isLastNameChanged = false;
    }
  }

  onIdChange() {
    if (this.id !== this.initialId) {
      this.isIdChanged = true;
    }
    else{
      this.isIdChanged = false;
    }
  }

  onPhoneChange() {
    if (this.phone !== this.initialPhone) {
      this.isPhoneChanged = true;
    }
    else{
      this.isPhoneChanged = false;
    }
  }

  onMailChange() {
    if (this.mail !== this.initialMail) {
      this.isMailChanged = true;
    }
    else{
      this.isMailChanged = false;
    }
  }

  onPasswordChange() {
    if (this.password !== this.initialPassword) {
      this.isPasswordChanged = true;
    }
    else{
      this.isPasswordChanged = false;
    }
  }

  onPassword2Change() {
    if (this.password2 !== this.initialPassword2) {
      this.isPassword2Changed = true;
    }
    else{
      this.isPassword2Changed = false;
    }
  }

  constructor(private matDialog:MatDialog) {
    this.initialName = this.name;
    this.initialLastName = this.lastName;
    this.initialId = this.id;
    this.initialPhone = this.phone;
    this.initialMail = this.mail;
    this.initialPassword= this.password;
    this.initialPassword2= this.password2;
  }
  
  showPassword = false;

  changePassword(){
    this.showPassword = true;
  }

  showNotification = false;
  showNotification2 = false;

  //se fija si las contras son iguales
  goToPopUp(){
    if(this.isPasswordChanged ||this.isPassword2Changed){
      if(this.password != this.password2){
        this.showNotification2 = true;
      }
      else{
        this.showNotification2 = false;
        this.checkChanges();
      }
    }
    else{
      this.checkChanges();
      this.showNotification2 = false;
    }
  }

  //se fija si se cambiaron campos
  checkChanges(){
    if (this.isNameChanged || this.isLastNameChanged || this.isIdChanged || this.isPhoneChanged || this.isMailChanged || this.isPasswordChanged ||this.isPassword2Changed){
      this.matDialog.open(PopUpComponent, {
        width: '25%',
        data: {isNameChanged: this.isNameChanged,isLastNameChanged: this.isLastNameChanged, isIdChanged: this.isIdChanged, isPhoneChanged: this.isPhoneChanged, isMailChanged: this.isMailChanged, isPasswordChanged: this.isPasswordChanged}
      });
      this.showNotification = false;
    }
    else {
      // Fields have not been modified, show the notification
      this.showNotification = true;
    }
  }
}

