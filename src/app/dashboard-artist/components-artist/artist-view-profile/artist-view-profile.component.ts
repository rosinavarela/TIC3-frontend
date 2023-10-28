import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArtistEditProfileComponent } from '../artist-edit-profile/artist-edit-profile.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserArtistService } from 'src/app/services/user/user-artist.service';


@Component({
  selector: 'app-artist-view-profile',
  templateUrl: './artist-view-profile.component.html',
  styleUrls: ['./artist-view-profile.component.css']
})
export class ArtistViewProfileComponent implements OnInit{
  links: string[] = [ //lista de links
    'http://www.google.com',
    'http://www.example.com',
    'http://www.openai.com'
  ];

  instagramTag: string ="cristiano"; 
  instagramLink: string='';
  artistId: number =0;
  artisticName: string='';
  picture: string='';
  musicGenre: string='';
  description:string='';

  constructor(private matDialog:MatDialog, private router: Router, private route: ActivatedRoute, private userArtistService: UserArtistService){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.artistId = +params['artistId']; // The '+' sign converts it to a number
    });
    this.fetchAritist(this.artistId);
    
    
  }

  fetchAritist(id: number): void {
    this.userArtistService.getArtistById(id).subscribe(
      (artistData) => {
        this.artisticName = artistData.artisticName;
        this.picture= artistData.picture;
        this.musicGenre=artistData.musicGenre.charAt(0).toUpperCase() + artistData.musicGenre.slice(1).toLowerCase();//Transforms it so that the first letter is upper case
        this.description=artistData.description;
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