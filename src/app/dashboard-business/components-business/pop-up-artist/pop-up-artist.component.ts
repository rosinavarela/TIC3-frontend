import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-artist',
  templateUrl: './pop-up-artist.component.html',
  styleUrls: ['./pop-up-artist.component.css']
})

export class PopUpArtistComponent {

  constructor(private route: ActivatedRoute, private router: Router, public dialogRef: MatDialogRef<PopUpArtistComponent>) { }

  goToArtist(){
    this.router.navigate(['/dashboard-business/artist-profile-business'],{ relativeTo: this.route });
    this.dialogRef.close();
  }
}
