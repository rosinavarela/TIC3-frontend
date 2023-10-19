import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-artist-edit-profile',
  templateUrl: './artist-edit-profile.component.html',
  styleUrls: ['./artist-edit-profile.component.css']
})
export class ArtistEditProfileComponent {

  profileForm: FormGroup;
  picture: string | ArrayBuffer | null = "/assets/images/logos/foto.jpeg";
  artisticName: string | null = "Nombre Artistico";
  igUsername: string | null = "Usuario";
  description: string | null = "no tengo";
  links: string | null = "google.com";
  hasProfilePicture: boolean = false;
  failureMessage?: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
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

}
