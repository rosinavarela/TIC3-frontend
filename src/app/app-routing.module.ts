import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './dashboard/components/event/event.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  // lazy loaded dashboard module
  {
    path: 'dashboard-business',
    loadChildren: () => import('./dashboard-business/dashboard-business.module').then(m => m.DashboardBusinessModule)
  },
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
  {path: 'Login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
