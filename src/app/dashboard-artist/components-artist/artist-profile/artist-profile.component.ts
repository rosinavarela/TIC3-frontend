import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent {
  links: string[] = [ //lista de links
    'http://www.google.com',
    'http://www.example.com',
    'http://www.openai.com'
  ];

  instagramTag: string ="cristiano"; 
  instagramLink: string=`https://www.instagram.com/${this.instagramTag}/`;

}
