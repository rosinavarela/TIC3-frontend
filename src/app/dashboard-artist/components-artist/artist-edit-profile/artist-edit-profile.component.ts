import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserArtistService } from 'src/app/services/user/user-artist.service';

@Component({
  selector: 'app-artist-edit-profile',
  templateUrl: './artist-edit-profile.component.html',
  styleUrls: ['./artist-edit-profile.component.css']
})
export class ArtistEditProfileComponent {

  profileForm: FormGroup;
  picture: string | ArrayBuffer | null = "/assets/images/logos/default-profile.webp";
  artisticName: string | null = "Nombre Artistico";
  igUsername: string | null = "Usuario";
  description: string | null = "no tengo";
  links: string | null = "google.com";
  musicGenre: string = "";
  hasProfilePicture: boolean = false;
  failureMessage?: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userArtistService: UserArtistService, private snackBar: MatSnackBar) {
    //console.log('Data received in ArtistProfileComponent:', data);
    // You can access data.response here.
   this.fetchAritist(data.id);
   this.profileForm = new FormGroup({
      artisticName: new FormControl(''),
      picture: new FormControl(''),
      igUsername: new FormControl(''),
      description: new FormControl(''),
      links: new FormControl(''),
      musicGenre: new FormControl(this.musicGenre),
    });
    
  }

  clearSelectedImage() {
    this.picture = "/assets/images/logos/default-profile.webp";
    this.hasProfilePicture = false;
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  onImageSelected(event: Event): void {
    this.hasProfilePicture = true;
  }

  fetchAritist(id: number): void {
    this.userArtistService.getArtistById(id).subscribe(
      (artistData) => {
        this.artisticName = artistData.artisticName;
        this.picture = artistData.picture;
        this.igUsername = artistData.igUsername;
        this.description = artistData.description;
        this.links = artistData.links;
        this.musicGenre = artistData.musicGenre.charAt(0).toUpperCase() + artistData.musicGenre.slice(1).toLowerCase();
        
      },
      (error) => {
        console.error('Error fetching business:', error);
      }
    );
  }

  updateArtist(id: number, artistData: any): void {
    this.userArtistService.updateArtistProfile(id, artistData).subscribe(
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

  editar(){
    const artistData = {
      artisticName: this.artisticName,
      picture: this.picture,
      igUsername: this.igUsername,
      description: this.description,
      links: this.links,
      musicGenre: this.musicGenre.toLowerCase(),
    };
    this.updateArtist(this.data.id,artistData);
  }

}
