import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessSidenavService} from 'src/app/services/menubar/business-sidenav.service';

@Component({
  selector: 'app-sidenav-wrapper-business',
  templateUrl: './sidenav-wrapper-business.component.html',
  styleUrls: ['./sidenav-wrapper-business.component.css']
})

export class SidenavWrapperBusinessComponent {
  constructor(public businessSidenavService: BusinessSidenavService) { }
}

