import { Component, ElementRef, Inject,ViewChild } from '@angular/core';
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

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  profileForm: FormGroup;
  picture: string | null = null;
  artisticName: string | null = "";
  igUsername: string | null = "";
  description: string | null = "";
  links: string | null = "";
  musicGenre: string = "";
  hasProfilePicture: boolean = false;
  failureMessage?: string;
  selectedImage: string | null = "/assets/images/logos/default-profile.webp";


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
    this.selectedImage = "/assets/images/logos/default-profile.webp";
    this.picture = null;
    this.hasProfilePicture = false;
    
    // Clear the file input value
    if (this.fileInput) {
        this.fileInput.nativeElement.value = '';
    }
  }

  onImageSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = () => {
        this.hasProfilePicture = true;

        const base64DataUrl = reader.result as string;
        this.selectedImage = base64DataUrl;

        this.picture = base64DataUrl.slice(22);
      }

      reader.readAsDataURL(fileInput.files[0]);
    } else {
      this.hasProfilePicture = false; 
    }
  }

  fetchAritist(id: number): void {
    this.userArtistService.getArtistById(id).subscribe(
      (artistData) => {
        this.artisticName = artistData.artisticName;
        if(artistData.picture){
          this.selectedImage = artistData.picture;
          this.picture = artistData.picture.slice(22);
        }
        this.igUsername = artistData.igUsername;
        this.description = artistData.description;
        this.links = artistData.links;        
        this.musicGenre = artistData.musicGenre;
        if(artistData.musicGenre){
          this.musicGenre = this.musicGenre.toLowerCase();
        }
        console.log(artistData);
        if(artistData.picture){
          this.hasProfilePicture = true;
        }
      },
      (error) => {
        console.error('Error fetching business:', error);
      }
    );
    console.log(this.picture);
    
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
    if(this.musicGenre) {
      const artistData = {
        artisticName: this.artisticName,
        picture: this.picture,
        igUsername: this.igUsername,
        description: this.description,
        links: this.links,
        musicGenre: this.musicGenre.toLowerCase(),
      };
      this.updateArtist(this.data.id,artistData);
    }else {
      const artistData = {
        artisticName: this.artisticName,
        picture: this.picture,
        igUsername: this.igUsername,
        description: this.description,
        links: this.links,
      };
      this.updateArtist(this.data.id,artistData);
    }
    
  }

}
