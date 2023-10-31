import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BusinessIdService } from 'src/app/services/user/business-id.service';

@Component({
  selector: 'app-pop-up-artist',
  templateUrl: './pop-up-artist.component.html',
  styleUrls: ['./pop-up-artist.component.css']
})

export class PopUpArtistComponent {
  artisticName: string = '';
  msj: string = '';
  artistId: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private route: ActivatedRoute, private router: Router, public dialogRef: MatDialogRef<PopUpArtistComponent>, private businessIdService: BusinessIdService) {
    this.msj = data.msj;
    this.artisticName = data.artist.artisticName;
    this.artistId = data.artist_id;
    console.log(data);
   }

  goToArtist(){
    const businessId = this.businessIdService.getBusinessId();
    this.router.navigate(['/dashboard-business',businessId,'artist-profile-business', this.artistId],{ relativeTo: this.route });
    this.dialogRef.close();
  }
}
