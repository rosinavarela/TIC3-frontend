import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavWrapperComponent } from './components/sidenav-wrapper/sidenav-wrapper.component';
import { EventComponent } from './components/event/event.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FilterUbicacionComponent } from 'src/app/dashboard/components/filter-ubicacion/filter-ubicacion.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterEstiloComponent } from './components/filter-estilo/filter-estilo.component';
import { FilterLocalComponent } from './components/filter-local/filter-local.component';
import { FilterMesComponent } from './components/filter-mes/filter-mes.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ExpandedEventComponent } from './components/expanded-event/expanded-event.component';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [SidenavWrapperComponent, EventComponent, AboutusComponent, ExpandedEventComponent, FilterEstiloComponent], //tuve que poner expanded event
  imports: [
    CommonModule,
    DashboardRoutingModule,

    // NG Material Modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    FilterUbicacionComponent,
    FilterLocalComponent,
    FilterMesComponent,
    MatCardModule,
    MatButtonModule, 
    MatInputModule,
    NgFor,
    AsyncPipe,
  ]
})
export class DashboardModule { }