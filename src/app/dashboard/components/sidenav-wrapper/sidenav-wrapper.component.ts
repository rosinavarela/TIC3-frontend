import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.scss']
})
export class SidenavWrapperComponent implements OnInit {

  isExpanded: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}