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
  artisticName: string = '';
  msj: string = '';
  artistId: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private route: ActivatedRoute, private router: Router, public dialogRef: MatDialogRef<PopUpArtistComponent>) {
    this.msj = data.msj;
    this.artisticName = data.artist.artisticName;
    this.artistId = data.artist_id;
    console.log(data);
   }

  goToArtist(){
    this.router.navigate(['/dashboard-business/artist-profile-business', this.artistId],{ relativeTo: this.route });
    this.dialogRef.close();
  }
}
