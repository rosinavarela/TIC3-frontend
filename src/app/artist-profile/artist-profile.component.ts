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
  links: string | null = null ;
  hasProfilePicture: boolean = false;


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
        this.picture = reader.result; // Assign the data URL to the artistImage property
        this.hasProfilePicture = true;
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    const formData = this.profileForm.value;
    let body = this.data.user;
    body.artisticName = formData.artisticName;
    body.igUsername = formData.igUsername;
    body.picture = formData.picture;
    body.description = formData.description;
    body.musicGenre = formData.musicGenre;
    body.links = formData.links;
    this.registerService.registerProfileArtist(body).subscribe(
      (response) => {
        console.log('response:', response)
      }
    )
  }


}
