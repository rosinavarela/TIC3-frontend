import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardBusinessModule } from './dashboard-business/dashboard-business.module';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RegisterComponent } from './register/register.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BusinessAccountComponent } from './business-account/business-account.component';
import { ArtistAccountComponent } from './artist-account/artist-account.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { PopUpApplicationComponent } from './dashboard-artist/components-artist/pop-up-application/pop-up-application.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { TermsComponent } from './terms/terms.component';
import { DashboardArtistModule } from './dashboard-artist/dashboard-artist.module';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LoginComponent,
    RegisterComponent,
    ArtistProfileComponent,
    BusinessAccountComponent,
    PopUpComponent,
    ArtistAccountComponent,
    PopUpApplicationComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    DashboardModule,
    DashboardBusinessModule,
    DashboardArtistModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
