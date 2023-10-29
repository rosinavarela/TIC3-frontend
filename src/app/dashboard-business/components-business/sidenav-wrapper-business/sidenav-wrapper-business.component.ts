import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessSidenavService} from 'src/app/services/menubar/business-sidenav.service';
import { BusinessIdService } from 'src/app/services/user/business-id.service';

@Component({
  selector: 'app-sidenav-wrapper-business',
  templateUrl: './sidenav-wrapper-business.component.html',
  styleUrls: ['./sidenav-wrapper-business.component.css']
})

export class SidenavWrapperBusinessComponent {
  businessId: number = 0;
  constructor(public businessSidenavService: BusinessSidenavService, private route: ActivatedRoute, private businessIdService: BusinessIdService) { 
    this.route.params.subscribe((params) => {
      this.businessId = params['id'];
    });
    this.businessIdService.setBusinessId(this.businessId);
  }
}

