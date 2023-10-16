import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNextEventsComponent } from './components-artist/my-next-events/my-next-events.component';
import { ArtistProfileComponent } from './components-artist/artist-profile/artist-profile.component';
import { SidenavWrapperArtistComponent } from './components-artist/sidenav-wrapper-artist/sidenav-wrapper-artist.component';
import {ExpandApplicationComponent} from './components-artist/expand-application/expand-application.component';
import { ApplyEventsComponent } from './components-artist/apply-events/apply-events.component';


const routes: Routes = [
  // Sidenavwrapper Component acts like a shell & the active child Component gets rendered into the <router-outlet>
  {
    path: '',
    component: SidenavWrapperArtistComponent,
    children: [
      {
        path: '',
        redirectTo: 'apply-events', // Redirect by default
        pathMatch: 'full'
      },
      {
        path: 'my-next-events',
        component: MyNextEventsComponent
      },
      {
        path: 'artist-profile', 
        component: ArtistProfileComponent
      },
      {
        path: 'expand-application', // Use a parameter to identify the event
        component: ExpandApplicationComponent
      },
      {
        path: 'apply-events', // Use a parameter to identify the event
        component: ApplyEventsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/apply-events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardArtistRoutingModule { }