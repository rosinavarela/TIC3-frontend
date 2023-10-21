import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextEventsComponent } from './components-business/next-events/next-events.component';
import { SidenavWrapperBusinessComponent } from './components-business/sidenav-wrapper-business/sidenav-wrapper-business.component';
import {ExpandedEventBusinessComponent} from './components-business/expanded-event-business/expanded-event-business.component';
import { CreateEventComponent } from './components-business/create-event/create-event.component';
import {MyNextEventsBusinessComponent} from './components-business/my-next-events-business/my-next-events-business.component';
import { ArtistProfileBusinessComponent } from './components-business/artist-profile-business/artist-profile-business.component';


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
        path: 'my-next-business-events', 
        component: MyNextEventsBusinessComponent
      },
      {
        path: 'expanded-event-business/:eventId', // Use a parameter to identify the event
        component: ExpandedEventBusinessComponent
      },
      {
        path: 'create-event', 
        component: CreateEventComponent
      },
      {
        path: 'artist-profile-business', 
        component: ArtistProfileBusinessComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard-business/next-events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardBusinessRoutingModule { }