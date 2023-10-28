import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardBusinessRoutingModule } from './dashboard-business-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavWrapperBusinessComponent } from './components-business/sidenav-wrapper-business/sidenav-wrapper-business.component';
import { NextEventsComponent } from './components-business/next-events/next-events.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CreateEventComponent } from './components-business/create-event/create-event.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MyNextEventsBusinessComponent} from './components-business/my-next-events-business/my-next-events-business.component';
import { ArtistProfileBusinessComponent } from './components-business/artist-profile-business/artist-profile-business.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpArtistComponent } from './components-business/pop-up-artist/pop-up-artist.component';

@NgModule({
  declarations: [SidenavWrapperBusinessComponent, NextEventsComponent, MyNextEventsBusinessComponent, CreateEventComponent, ArtistProfileBusinessComponent, PopUpArtistComponent], //tuve que poner expanded event para que me agarre el mat
  imports: [
    CommonModule,
    DashboardBusinessRoutingModule,

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
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule

  ]
})
export class DashboardBusinessModule { }