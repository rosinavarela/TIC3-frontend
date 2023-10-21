import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNextEventsComponent } from './components-artist/my-next-events/my-next-events.component';
import { ArtistViewProfileComponent} from './components-artist/artist-view-profile/artist-view-profile.component';
import { SidenavWrapperArtistComponent } from './components-artist/sidenav-wrapper-artist/sidenav-wrapper-artist.component';
import {ExpandApplicationComponent} from './components-artist/expand-application/expand-application.component';
import { ApplyEventsComponent } from './components-artist/apply-events/apply-events.component';
import { ArtistEditProfileComponent } from './components-artist/artist-edit-profile/artist-edit-profile.component';
import { PopUpApplicationComponent } from './components-artist/pop-up-application/pop-up-application.component';


const routes: Routes = [
  // Sidenavwrapper Component acts like a shell & the active child Component gets rendered into the <router-outlet>
  {
    path: '',
    component: SidenavWrapperArtistComponent,
    children: [
      {
        path: '',
        redirectTo: 'apply-events', 
        pathMatch: 'full'
      },
      {
        path: 'my-next-events',
        component: MyNextEventsComponent
      },
      {
        path: 'artist-view-profile', 
        component: ArtistViewProfileComponent
      },
      {
        path: 'expand-application', 
        component: ExpandApplicationComponent
      },
      {
        path: 'apply-events', 
        component: ApplyEventsComponent
      },
      {
        path: 'artist-edit-profile', 
        component: ArtistEditProfileComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard-artist/apply-events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardArtistRoutingModule { }