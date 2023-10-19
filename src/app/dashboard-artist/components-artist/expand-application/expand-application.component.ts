import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopUpApplicationComponent } from '../pop-up-application/pop-up-application.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-expand-application',
  templateUrl: './expand-application.component.html',
  styleUrls: ['./expand-application.component.css']
})
export class ExpandApplicationComponent {

  constructor(private router: Router, private matDialog:MatDialog) { }

  goBackToEvent() {
    this.router.navigate(['/apply-events']); 
  }

  applyEvent(){
    this.matDialog.open(PopUpApplicationComponent,{
      width: '25%',
    })
  }
  
}
