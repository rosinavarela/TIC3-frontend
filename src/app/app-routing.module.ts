import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  // lazy loaded dashboard module
  {
    path: 'dashboard-artist/:id',
    loadChildren: () => import('./dashboard-artist/dashboard-artist.module').then(m => m.DashboardArtistModule)
  },
  {
    path: 'dashboard-business/:id',
    loadChildren: () => import('./dashboard-business/dashboard-business.module').then(m => m.DashboardBusinessModule)
  },  
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {path: 'Login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
