import { MatDialog } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpComponent {
  isNameChanged: boolean;
  isLegalNameChanged: boolean;
  isPhoneChanged: boolean;
  isLocationChanged: boolean;
  isRutChanged: boolean;
  isDescriptionChanged: boolean;
  isLastNameChanged: boolean;
  isMailChanged:boolean; 
  isIdChanged: boolean; 
  isPasswordChanged:boolean //no paso las dos porque como ya chekeamos si son iguales con una me parece que da

  constructor(@Inject(MAT_DIALOG_DATA) public data: { isNameChanged: boolean, isLegalNameChanged: boolean, isLocationChanged: boolean, isPhoneChanged: boolean , isRutChanged: boolean, isDescriptionChanged: boolean, isLastNameChanged: boolean, isMailChanged:boolean, isIdChanged: boolean, isPasswordChanged:boolean}) {
    this.isNameChanged = data.isNameChanged;
    this.isLegalNameChanged = data.isLegalNameChanged;
    this.isPhoneChanged = data.isPhoneChanged;
    this.isLocationChanged = data.isLocationChanged;
    this.isRutChanged = data.isRutChanged;
    this.isDescriptionChanged = data.isDescriptionChanged;
    this.isLastNameChanged=data.isLastNameChanged; 
    this.isMailChanged= data.isMailChanged;
    this.isIdChanged=data.isIdChanged;
    this.isPasswordChanged=data.isPasswordChanged;
  }
}
