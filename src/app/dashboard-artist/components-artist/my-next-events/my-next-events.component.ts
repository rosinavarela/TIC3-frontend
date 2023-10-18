
import { Component, OnInit } from '@angular/core';
import { RippleGlobalOptions } from '@angular/material/core';

const globalRippleConfig: RippleGlobalOptions = { //ver bien como se hace esto para desactivar el efecto cuando apretas
  disabled: true,
  animation: {
    enterDuration: 0,
    exitDuration: 0
  }
};

@Component({
  selector: 'app-my-next-events',
  templateUrl: './my-next-events.component.html',
  styleUrls: ['./my-next-events.component.css'],
})
export class MyNextEventsComponent {

}

