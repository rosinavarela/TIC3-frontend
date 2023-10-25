import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserBusinessService } from '../services/user/user-business.service';
import { UserArtistService } from '../services/user/user-artist.service';

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
  isMailChanged: boolean;
  isIdChanged: boolean;
  isPasswordChanged: boolean; //no paso las dos porque como ya chekeamos si son iguales con una me parece que da
  isWebPageChanged: boolean;

  name: string;
  legalName: string;
  phone: string;
  location: string;
  rut: number;
  description: string;
  mail: string;
  rating: number;
  webPage: string;
  password: string;
  id: number;
  lastName: string;
  type: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userBusinessService: UserBusinessService, private userArtistService: UserArtistService, public dialogRef: MatDialogRef<PopUpComponent>) {
    this.isNameChanged = data.isNameChanged;
    this.isLegalNameChanged = data.isLegalNameChanged;
    this.isPhoneChanged = data.isPhoneChanged;
    this.isLocationChanged = data.isLocationChanged;
    this.isRutChanged = data.isRutChanged;
    this.isDescriptionChanged = data.isDescriptionChanged;
    this.isLastNameChanged = data.isLastNameChanged;
    this.isMailChanged = data.isMailChanged;
    this.isIdChanged = data.isIdChanged;
    this.isPasswordChanged = data.isPasswordChanged;
    this.isWebPageChanged = data.isWebPageChanged;

    this.rut = data.rut;
    this.name = data.name;
    this.legalName = data.legalName;
    this.phone = data.phone;
    this.location = data.location;
    this.description = data.description;
    this.mail = data.mail;
    this.rating = data.rating;
    this.webPage = data.webPage;
    this.password =data.password;
    this.id = data.id;
    this.lastName = data.lastName;
    this.type = data.type;
    
  }

  editar() {
    if (this.type === 'artist'){
      const artistData = {
        id: this.id,
        phone: this.phone,
        name: this.name,
        lastName: this.lastName,
        password: this.password,
      };
  
      this.updateArtist(this.id, artistData);
    }else{
      const businessData = {
        rut: this.rut,
        phone: this.phone,
        name: this.name,
        legalName: this.legalName,
        location: this.location,
        description: this.description,
        mail: this.mail,
        rating: this.rating,
        webPage: this.webPage,
        password: this.password,
      };
  
      this.updateBusiness(this.rut, businessData);
    }
    
    this.dialogRef.close();
  }

  updateBusiness(id: number, businessData: any): void {
    this.userBusinessService.updateBusiness(id, businessData).subscribe(
      (updatedBusiness) => {
        // Handle the updated business data
        console.log('Business updated:', updatedBusiness);
      },
      (error) => {
        console.error('Error updating business:', error);
      }
    );
  }

  updateArtist(id: number, artistData: any): void {
    /*this.userArtistService.updateArtist(id, artistData).subscribe(
      (updatedArtist) => {
        // Handle the updated business data
        console.log('Business updated:', updatedArtist);
      },
      (error) => {
        console.error('Error updating artist:', error);
      }
    );*/
    console.log('Artist updated test');
  }
}
