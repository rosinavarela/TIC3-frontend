import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService} from 'src/app/services/menubar/sidenav.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.css']
})

export class SidenavWrapperComponent {
  constructor(public sidenavService: SidenavService) { }
}

