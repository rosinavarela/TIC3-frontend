import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserBusinessService } from '../services/user/user-business.service';

@Component({
  selector: 'app-business-account',
  templateUrl: './business-account.component.html',
  styleUrls: ['./business-account.component.css']
})
export class BusinessAccountComponent {

  //aca irian los datos iniciales, antes de modificar, que hay que traer del backend
  name: string = '';
  legalName: string = '';
  phone: string = '';
  location: string = '';
  rut: number = 0;
  description: string = '';
  mail: string = '';
  rating: number = 0;
  webPage: string ='';
  password: string = '';
  password2: string = '';

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
  initialRut: number;
  isDescriptionChanged = false;
  initialDescription: string;
  isMailChanged = false;
  initialMail: string;
  isWebPageChanged = false;
  initialWebPage: string;
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
    else {
      this.isNameChanged = false;
    }
  }

  onLegalNameChange() {
    if (this.legalName !== this.initialLegalName) {
      this.isLegalNameChanged = true;
    }
    else {
      this.isLegalNameChanged = false;
    }
  }

  onLocationChange() {
    if (this.location !== this.initialLocation) {
      this.isLocationChanged = true;
    }
    else {
      this.isLocationChanged = false;
    }
  }

  onPhoneChange() {
    if (this.phone !== this.initialPhone) {
      this.isPhoneChanged = true;
    }
    else {
      this.isPhoneChanged = false;
    }
  }

  onRutChange() {
    if (this.rut !== this.initialRut) {
      this.isRutChanged = true;
    }
    else {
      this.isRutChanged = false;
    }
  }

  onDescriptionChange() {
    if (this.description !== this.initialDescription) {
      this.isDescriptionChanged = true;
    }
    else {
      this.isDescriptionChanged = false;
    }
  }

  onMailChange() {
    if (this.mail !== this.initialMail) {
      this.isMailChanged = true;
    }
    else {
      this.isMailChanged = false;
    }
  }
  onWebPageChange() {
    if (this.webPage !== this.initialWebPage) {
      this.isWebPageChanged = true;
    }
    else {
      this.isWebPageChanged = false;
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

  constructor(private matDialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private userBusinessService: UserBusinessService) {
    //data tendría que tener el id y tipo del usuario loggeado, en este caso ya se q va a ser business
    this.fetchBusiness(data.id); 

    this.initialName = this.name;
    this.initialLegalName = this.legalName;
    this.initialLocation = this.location;
    this.initialPhone = this.phone;
    this.initialRut = this.rut;
    this.initialDescription = this.description;
    this.initialMail = this.mail;
    this.initialWebPage = this.webPage;
    this.initialPassword= this.password;
    this.initialPassword2= this.password2;
  }

  showPassword = false;
  
  changePassword(){
    this.showPassword = true;
  }

  showNotification = false;
  showNotification2 = false;

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

  checkChanges(){  
    const dialogData = {
      type: 'business',
      isNameChanged: this.isNameChanged,
      isLegalNameChanged: this.isLegalNameChanged,
      isLocationChanged: this.isLocationChanged,
      isPhoneChanged: this.isPhoneChanged,
      isMailChanged: this.isMailChanged,
      isRutChanged: this.isRutChanged,
      isDescriptionChanged: this.isDescriptionChanged,
      isWebPageChanged: this.isWebPageChanged,
      isPasswordChanged: this.isPasswordChanged,
      rut: this.rut,
      phone: this.phone,
      name: this.name,
      legalName: this.legalName,
      location: this.location,
      description: this.description,
      mail: this.mail,
      rating: this.rating,
      webPage: this.webPage,
      password: this.password
    };
    if (this.isNameChanged || this.isLegalNameChanged ||this.isLocationChanged || this.isMailChanged || this.isPhoneChanged || this.isRutChanged || this.isDescriptionChanged || this.isPasswordChanged ||this.isPassword2Changed || this.isWebPageChanged){
      this.matDialog.open(PopUpComponent, {
        width: '25%',
        data: dialogData,
      });
      this.showNotification = false;
    }
    else {
      // Fields have not been modified, show the notification
      this.showNotification = true;
    }
  }

  passwordInputType1: string = 'password';
  passwordInputType2: string = 'password';


  togglePasswordVisibility1() {
    this.passwordInputType1 = this.passwordInputType1 === 'password' ? 'text' : 'password';
    this.hidePassword1 = !this.hidePassword1;
  }

  togglePasswordVisibility2() {
    this.passwordInputType2 = this.passwordInputType2 === 'password' ? 'text' : 'password';
    this.hidePassword2 = !this.hidePassword2;
  }
  fetchBusiness(id: number): void {
    this.userBusinessService.getBusinessById(id).subscribe(
      (businessData) => {
        console.log('Business data:', businessData);
        this.name = businessData.name;
        this.legalName = businessData.legalName;
        this.location = businessData.location;
        this.phone = businessData.phone;
        this.description = businessData.description;
        this.rut = businessData.rut;
        this.rating = businessData.rating;
        this.webPage = businessData.webPage;
        this.mail = businessData.user.email;
      },
      (error) => {
        console.error('Error fetching business:', error);
      }
    );
  }

}
