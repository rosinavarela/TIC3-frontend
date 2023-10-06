import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './dashboard/components/event/event.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  // lazy loaded dashboard module
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

/*anttes decia esto 
  {path: '', component: HomeComponent},
  {path: 'Login', component: LoginComponent}
*/
/* 
Aquí, estás creando una única ruta en tu aplicación. 
Esta ruta tiene un path (ruta) vacío ('') que significa que será la ruta raíz de tu aplicación. 
Cuando un usuario accede a la raíz de tu sitio web, el componente asociado será HomeComponent.
Se muestra cuando carga la web por primera vez. 

Hay que ir agregando todas las rutas
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
