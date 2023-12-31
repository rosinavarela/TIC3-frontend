import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardArtistRoutingModule } from './dashboard-artist-routing.module';
import { ArtistViewProfileComponent } from './components-artist/artist-view-profile/artist-view-profile.component';
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
import { MatDialogModule } from '@angular/material/dialog';
import { ArtistEditProfileComponent } from './components-artist/artist-edit-profile/artist-edit-profile.component';
import { FilterUbicacionArtistComponent } from './components-artist/filter-ubicacion-artist/filter-ubicacion-artist.component';
import { FilterMesArtistComponent } from './components-artist/filter-mes-artist/filter-mes-artist.component';
import { FilterLocalArtistComponent } from './components-artist/filter-local-artist/filter-local-artist.component';
import { FilterEstiloArtistComponent } from './components-artist/filter-estilo-artist/filter-estilo-artist.component';
import { ArtistIdService } from '../services/user/artist-id.service';

@NgModule({
  declarations: [SidenavWrapperArtistComponent, MyNextEventsComponent, ArtistViewProfileComponent, ExpandApplicationComponent, ApplyEventsComponent, ArtistEditProfileComponent], //tuve que poner expanded event para que me agarre el mat
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
    MatDialogModule,
    FilterUbicacionArtistComponent,
    FilterEstiloArtistComponent,
    FilterLocalArtistComponent,
    FilterMesArtistComponent,
  ],
  providers: [ArtistIdService],
})
export class DashboardArtistModule { }