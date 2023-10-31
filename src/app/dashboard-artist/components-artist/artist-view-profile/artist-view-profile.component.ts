import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArtistEditProfileComponent } from '../artist-edit-profile/artist-edit-profile.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserArtistService } from 'src/app/services/user/user-artist.service';
import { ArtistIdService } from 'src/app/services/user/artist-id.service';


@Component({
  selector: 'app-artist-view-profile',
  templateUrl: './artist-view-profile.component.html',
  styleUrls: ['./artist-view-profile.component.css']
})
export class ArtistViewProfileComponent implements OnInit{
  links: string ='http://www.google.com';

  instagramTag: string | null= null; 
  instagramLink: string='';
  artistId: number =0;
  artisticName: string='';
  picture: string='';
  musicGenre: string='';
  description:string='';

  constructor(private matDialog:MatDialog, private router: Router, private route: ActivatedRoute, private userArtistService: UserArtistService, private artistIdService: ArtistIdService){}

  ngOnInit(): void {
    this.artistId = this.artistIdService.getArtistId();
    this.fetchAritist(this.artistId);
    
    
  }

  fetchAritist(id: number): void {
    this.userArtistService.getArtistById(id).subscribe(
      (artistData) => {
        this.artisticName = artistData.artisticName;
        if(artistData.picture){
          this.picture= artistData.picture;
        } else {
          this.picture = '/assets/images/logos/default-profile.webp';
        }
        this.musicGenre=artistData.musicGenre.charAt(0).toUpperCase() + artistData.musicGenre.slice(1).toLowerCase();//Transforms it so that the first letter is upper case
        this.description=artistData.description;
        console.log('Received artistData.igUsername:', artistData.igUsername);
        this.instagramTag=artistData.igUsername;
        this.links=artistData.links;
        this.instagramLink = `https://www.instagram.com/${this.instagramTag}/`
        
      },
      (error) => {
        console.error('Error fetching business:', error);
      }
    );
  }

  editProfile(){
    const dialogData = {
      id: this.artistId,
    }
    this.matDialog.open(ArtistEditProfileComponent, {
      width: '60%',
      data: dialogData,
      });
  }
}