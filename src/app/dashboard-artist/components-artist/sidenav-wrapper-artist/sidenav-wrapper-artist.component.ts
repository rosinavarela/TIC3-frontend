import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistSidenavService} from 'src/app/services/menubar/artist-sidenav.service';

@Component({
  selector: 'app-sidenav-wrapper-artist',
  templateUrl: './sidenav-wrapper-artist.component.html',
  styleUrls: ['./sidenav-wrapper-artist.component.css']
})

export class SidenavWrapperArtistComponent {
  constructor(public artistSidenavService: ArtistSidenavService) { }
}

