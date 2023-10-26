import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserBusinessService } from '../services/user/user-business.service';
import { UserArtistService } from '../services/user/user-artist.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userBusinessService: UserBusinessService, private userArtistService: UserArtistService, public dialogRef: MatDialogRef<PopUpComponent>, private matDialog:MatDialog, private snackBar: MatSnackBar) {
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
    this.matDialog.closeAll()
  }

  updateBusiness(id: number, businessData: any): void {
    this.userBusinessService.updateBusiness(id, businessData).subscribe(
      (updatedBusiness) => {
        // Handle the updated business data
        this.snackBar.open('Datos actualizados', 'Close', {
          duration: 5000, // Duration of the snackbar display (in milliseconds)
        });
      },
      (error) => {
        console.error('Error updating business:', error);
        this.snackBar.open('Ocurrió un error', 'Close', {
          duration: 5000, // Duration of the snackbar display (in milliseconds)
        });
      }
    );
  }

  updateArtist(id: number, artistData: any): void {
    this.userArtistService.updateArtistAccount(id, artistData).subscribe(
      (updatedArtist) => {
        // Handle the updated business data
        this.snackBar.open('Datos actualizados', 'Close', {
          duration: 5000, // Duration of the snackbar display (in milliseconds)
        });
      },
      (error) => {
        console.error('Error updating artist:', error);
        this.snackBar.open('Ocurrió un error', 'Close', {
          duration: 5000, // Duration of the snackbar display (in milliseconds)
        });
      }
    );
  }
}
