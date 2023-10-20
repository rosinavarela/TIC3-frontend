import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SidenavWrapperComponent } from './components/sidenav-wrapper/sidenav-wrapper.component';
import {ExpandedEventComponent} from './components/expanded-event/expanded-event.component';


const routes: Routes = [
  // Sidenavwrapper Component acts like a shell & the active child Component gets rendered into the <router-outlet>
  {
    path: '',
    component: SidenavWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'event', // Redirect to 'home' by default
        pathMatch: 'full'
      },
      {
        path: 'event',
        component: EventComponent
      },
      {
        path: 'aboutus', 
        component: AboutusComponent
      },
      {
        path: 'expanded-event/:eventId', // Use a parameter to identify the event
        component: ExpandedEventComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/event',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }