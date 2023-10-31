import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BusinessIdService } from 'src/app/services/user/business-id.service';
import { UserArtistService } from 'src/app/services/user/user-artist.service';


@Component({
  selector: 'app-artist-profile-business',
  templateUrl: './artist-profile-business.component.html',
  styleUrls: ['./artist-profile-business.component.css']
})
export class ArtistProfileBusinessComponent implements OnInit {
  links: string[] = [ //lista de links
    'http://www.google.com',
    'http://www.example.com',
    'http://www.openai.com'
  ];

  instagramTag: string = "cristiano";
  instagramLink: string = '';
  artistId: number = 0;
  eventId: string = '';
  artisticName: string = '';
  picture: string = '';
  musicGenre: string = '';
  description: string = '';

  constructor(private matDialog: MatDialog, private route: ActivatedRoute, private router: Router, private businessIdService: BusinessIdService, private userArtistService: UserArtistService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.artistId = +params['artistId']; // The '+' sign converts it to a number
      this.eventId = params['eventId'];
    });
    this.fetchAritist(this.artistId);
  }

  fetchAritist(id: number): void {
    this.userArtistService.getArtistById(id).subscribe(
      (artistData) => {
        this.artisticName = artistData.artisticName;
        if (artistData.picture) {
          this.picture = artistData.picture;
        } else {
          this.picture = '/assets/images/logos/default-profile.webp';
        }

        this.musicGenre = artistData.musicGenre.charAt(0).toUpperCase() + artistData.musicGenre.slice(1).toLowerCase();//Transforms it so that the first letter is upper case
        this.description = artistData.description;
        this.instagramTag = artistData.igUsername;
        this.links = artistData.links;
        this.instagramLink = `https://www.instagram.com/${this.instagramTag}/`

      },
      (error) => {
        console.error('Error fetching business:', error);
      }
    );
  }

  goBackToNextEvents() {
    const businessId = this.businessIdService.getBusinessId();
    this.router.navigate(['/dashboard-business', businessId, 'next-events'], { relativeTo: this.route });
  }

}
