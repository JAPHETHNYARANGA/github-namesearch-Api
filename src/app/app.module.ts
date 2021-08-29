import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RepositoriesService } from './services/repositories.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingComponent,
    RepositoriesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
   
  ],
  providers: [ProfileService, RepositoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
