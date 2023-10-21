import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopUpApplicationComponent } from '../pop-up-application/pop-up-application.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expand-application',
  templateUrl: './expand-application.component.html',
  styleUrls: ['./expand-application.component.css']
})
export class ExpandApplicationComponent {

  constructor(private router: Router, private matDialog:MatDialog,private route: ActivatedRoute){ }

  goBackToEvent() {
    this.router.navigate(['/dashboard-artist/apply-events'], { relativeTo: this.route });; 
  }

  applyEvent(){
    this.matDialog.open(PopUpApplicationComponent,{
      width: '25%',
    })
  }
  
}
