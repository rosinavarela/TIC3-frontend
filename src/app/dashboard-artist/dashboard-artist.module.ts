import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardArtistRoutingModule } from './dashboard-artist-routing.module';
import { ArtistProfileComponent } from './components-artist/artist-profile/artist-profile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavWrapperArtistComponent } from './components-artist/sidenav-wrapper-artist/sidenav-wrapper-artist.component';
import { MyNextEventsComponent } from './components-artist/my-next-events/my-next-events.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ExpandApplicationComponent } from './components-artist/expand-application/expand-application.component';
import { ApplyEventsComponent } from './components-artist/apply-events/apply-events.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [SidenavWrapperArtistComponent, MyNextEventsComponent, ArtistProfileComponent, ExpandApplicationComponent, ApplyEventsComponent], //tuve que poner expanded event para que me agarre el mat
  imports: [
    CommonModule,
    DashboardArtistRoutingModule,

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

  ]
})
export class DashboardArtistModule { }