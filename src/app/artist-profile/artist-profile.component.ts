import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterService } from '../services/register/register.service';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent {

  profileForm: FormGroup;
  picture: string | ArrayBuffer | null = "/assets/images/logos/foto.jpeg";
  artisticName: string | null = null;
  igUsername: string | null = null;
  description: string | null = null;
  links: string | null = null;
  hasProfilePicture: boolean = false;
  failureMessage?: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private registerService: RegisterService) {
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
          picture: base64DataUrl,
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


}
