import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextEventsComponent } from './components-business/next-events/next-events.component';
import { BusinessProfileComponent } from './components-business/business-profile/business-profile.component';
import { SidenavWrapperBusinessComponent } from './components-business/sidenav-wrapper-business/sidenav-wrapper-business.component';
import {ExpandedEventBusinessComponent} from './components-business/expanded-event-business/expanded-event-business.component';
import { CreateEventComponent } from './components-business/create-event/create-event.component';


const routes: Routes = [
  // Sidenavwrapper Component acts like a shell & the active child Component gets rendered into the <router-outlet>
  {
    path: '',
    component: SidenavWrapperBusinessComponent,
    children: [
      {
        path: '',
        redirectTo: 'next-events', // Redirect by default
        pathMatch: 'full'
      },
      {
        path: 'next-events',
        component: NextEventsComponent
      },
      {
        path: 'business-profile', 
        component: BusinessProfileComponent
      },
      {
        path: 'expanded-event-business/:eventId', // Use a parameter to identify the event
        component: ExpandedEventBusinessComponent
      },
      {
        path: 'create-event', // Use a parameter to identify the event
        component: CreateEventComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/next-events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardBusinessRoutingModule { }