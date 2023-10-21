import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artist-profile-event',
  templateUrl: './artist-profile-event.component.html',
  styleUrls: ['./artist-profile-event.component.css']
})
export class ArtistProfileEventComponent {
  links: string[] = [ //lista de links
    'http://www.google.com',
    'http://www.example.com',
    'http://www.openai.com'
  ];

  instagramTag: string ="cristiano"; 
  instagramLink: string=`https://www.instagram.com/${this.instagramTag}/`;

  constructor(private matDialog:MatDialog, private route: ActivatedRoute, private router: Router) { }

  goBackToExpandedEvent(eventId: number) {
    this.router.navigate(['/dashboard/expanded-event', eventId],{ relativeTo: this.route });
  }


}
