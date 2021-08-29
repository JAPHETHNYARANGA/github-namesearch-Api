import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';


const routes: Routes = [
  {path:'home', component:LandingComponent},
  {path:'', component:LandingComponent},
  {path:'users', component:ProfileComponent},
  {path:'repositories', component:RepositoriesComponent},
  {path:'**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
