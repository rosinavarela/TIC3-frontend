import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  { path: '**', component: HomeComponent }    //wildcard route, could be a 404 not found page
];

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
