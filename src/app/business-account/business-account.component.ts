import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-business-account',
  templateUrl: './business-account.component.html',
  styleUrls: ['./business-account.component.css']
})
export class BusinessAccountComponent {
  //aca irian los datos iniciales, antes de modificar, que hay que traer del backend
  name: string = 'Name'; 
  legalName: string = 'LegalName';
  phone: string = 'Phone';
  location: string = 'location';
  rut: string = 'Rut';
  description: string = 'description';
  mail: string = 'mail';

  //esta parte es para ver si el nombre cambio para poder ponerlo en el popup
  isNameChanged = false;
  initialName: string;
  isLegalNameChanged = false;
  initialLegalName: string;
  isLocationChanged = false;
  initialLocation: string;
  isPhoneChanged = false;
  initialPhone: string;
  isRutChanged = false;
  initialRut: string;
  isDescriptionChanged = false;
  initialDescription: string;
  isMailChanged = false;
  initialMail: string;

  onNameChange() {
    if (this.name !== this.initialName) {
      this.isNameChanged = true;
    }
    else{
      this.isNameChanged = false;
    }
  }

  onLegalNameChange() {
    if (this.legalName !== this.initialLegalName) {
      this.isLegalNameChanged = true;
    }
    else{
      this.isLegalNameChanged = false;
    }
  }

  onLocationChange() {
    if (this.location !== this.initialLocation) {
      this.isLocationChanged = true;
    }
    else{
      this.isLocationChanged = false;
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

  onRutChange() {
    if (this.rut !== this.initialRut) {
      this.isRutChanged = true;
    }
    else{
      this.isRutChanged = false;
    }
  }

  onDescriptionChange() {
    if (this.description !== this.initialDescription) {
      this.isDescriptionChanged = true;
    }
    else{
      this.isDescriptionChanged = false;
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

  constructor(private matDialog:MatDialog) {
    this.initialName = this.name;
    this.initialLegalName = this.legalName;
    this.initialLocation = this.location;
    this.initialPhone = this.phone;
    this.initialRut = this.rut;
    this.initialDescription = this.description;
    this.initialMail = this.mail;

  }

  showNotification = false;

  goToPopUp(){
    
    if (this.isNameChanged || this.isLegalNameChanged ||this.isLocationChanged || this.isMailChanged || this.isPhoneChanged || this.isRutChanged || this.isDescriptionChanged){
      this.matDialog.open(PopUpComponent, {
        width: '25%',
        data: {isNameChanged: this.isNameChanged,isLegalNameChanged: this.isLegalNameChanged, isLocationChanged: this.isLocationChanged, isPhoneChanged: this.isPhoneChanged, isMailChanged: this.isMailChanged, isRutChanged: this.isRutChanged, isDescriptionChanged: this.isDescriptionChanged}
      });
      this.showNotification = false;
    }
    else {
      // Fields have not been modified, show the notification
      this.showNotification = true;
    }
  }

}
