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

  constructor(@Inject(MAT_DIALOG_DATA) public data: { isNameChanged: boolean, isLegalNameChanged: boolean, isLocationChanged: boolean, isPhoneChanged: boolean , isRutChanged: boolean, isDescriptionChanged: boolean}) {
    this.isNameChanged = data.isNameChanged;
    this.isLegalNameChanged = data.isLegalNameChanged;
    this.isPhoneChanged = data.isPhoneChanged;
    this.isLocationChanged = data.isLocationChanged;
    this.isRutChanged = data.isRutChanged;
    this.isDescriptionChanged = data.isDescriptionChanged;

  }
}
