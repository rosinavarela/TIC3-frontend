import { Component, ElementRef, Inject,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterService } from '../services/register/register.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent {

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  profileForm: FormGroup;
  picture: string | ArrayBuffer | null = "/assets/images/logos/default-profile.webp";
  artisticName: string | null = null;
  igUsername: string | null = null;
  description: string | null = null;
  links: string | null = null;
  hasProfilePicture: boolean = false;
  failureMessage?: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private registerService: RegisterService, private dialogRef: DialogRef, private router: Router) {
    //console.log('Data received in ArtistProfileComponent:', data);
    // You can access data.response here.
    this.profileForm = new FormGroup({
      artisticName: new FormControl(''),
      picture: new FormControl(''),
      igUsername: new FormControl(''),
      description: new FormControl(''),
      links: new FormControl(''),
      musicGenre: new FormControl(''),
    });
  }

  // Method to handle image selection
  onImageSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.picture = reader.result;
        this.hasProfilePicture = true;
        const base64DataUrl = reader.result as string;
        this.picture = base64DataUrl;

        // You can also save the Base64 data URL to a form field in your form.
        this.profileForm.patchValue({
          picture: base64DataUrl.slice(22),
        });
      };
      reader.readAsDataURL(file);

    }
  }
  clearInput() {
    this.profileForm.get('artisticName')?.setValue('');
    this.profileForm.get('picture')?.setValue('');
    this.profileForm.get('igUsername')?.setValue('');
    this.profileForm.get('description')?.setValue('');
    this.profileForm.get('links')?.setValue('');    
  }


  saveProfile() {
    const formData = this.profileForm.value;
    let body = this.data.user;
    body.artisticName = formData.artisticName.trim() !== '' ? formData.artisticName : null;
    body.igUsername = formData.igUsername.trim() !== '' ? formData.igUsername : null;
    body.picture = formData.picture.trim() !== '' ? formData.picture : null;
    body.description = formData.description.trim() !== '' ? formData.description : null;
    body.musicGenre = formData.musicGenre.trim() !== '' ? formData.musicGenre : null;
    body.links = formData.links.trim() !== '' ? formData.links : null;
    this.registerService.registerProfileArtist(body).subscribe(
      (response) => {
        console.log('response:', response)
        this.router.navigate(['/dashboard-artist', response.id]);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Errorrrrr:', error);
        if (error.status === 404) {
          this.failureMessage = error.error.message;
          this.clearInput();
        } else if (error.status === 500) {
          this.failureMessage = 'Ocurrió un error, intente de nuevo';
          this.clearInput();
        }
      }
    )
  }

  clearSelectedImage() {
    this.picture = "/assets/images/logos/default-profile.webp";
    this.hasProfilePicture = false;
    
    // Clear the file input value
    if (this.fileInput) {
        this.fileInput.nativeElement.value = '';
    }
  } 

  omitir( ) {
    console.log(this.data.user.id);
    this.router.navigate(['/dashboard-artist', this.data.user.id]);
    this.dialogRef.close();
  }

}
