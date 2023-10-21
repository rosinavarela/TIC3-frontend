import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artist-profile-business',
  templateUrl: './artist-profile-business.component.html',
  styleUrls: ['./artist-profile-business.component.css']
})
export class ArtistProfileBusinessComponent {
  links: string[] = [ //lista de links
    'http://www.google.com',
    'http://www.example.com',
    'http://www.openai.com'
  ];

  instagramTag: string ="cristiano"; 
  instagramLink: string=`https://www.instagram.com/${this.instagramTag}/`;

  constructor(private matDialog:MatDialog, private route: ActivatedRoute, private router: Router) { }

  goBackToNextEvents() {
    this.router.navigate(['/dashboard-business/next-events'],{ relativeTo: this.route });
  }

}
