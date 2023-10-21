import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expanded-event',
  templateUrl: './expanded-event.component.html',
  styleUrls: ['./expanded-event.component.css']
})
export class ExpandedEventComponent {

  link: string= "wwww.google.com" //aca poner el link del lugar

  constructor(private router: Router, private route: ActivatedRoute) { }

  goBackToEvent() {
    this.router.navigate(['/dashboard/event'],{ relativeTo: this.route });
  }

  goToArtist(){
    this.router.navigate(['/dashboard/artist-profile-event'],{ relativeTo: this.route });
  }
}
