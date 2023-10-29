import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistSidenavService} from 'src/app/services/menubar/artist-sidenav.service';
import { ArtistIdService } from 'src/app/services/user/artist-id.service';

@Component({
  selector: 'app-sidenav-wrapper-artist',
  templateUrl: './sidenav-wrapper-artist.component.html',
  styleUrls: ['./sidenav-wrapper-artist.component.css']
})

export class SidenavWrapperArtistComponent {
  artistId: number = 0;
  constructor(public artistSidenavService: ArtistSidenavService, private route: ActivatedRoute,private artistIdService: ArtistIdService) { 
    this.route.params.subscribe((params) => {
      this.artistId = params['id'];
    });
    this.artistIdService.setArtistId(this.artistId);
  }


}

