import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'profile/:id', redirectTo: '/profile/:id/view', pathMatch: 'full' },
  { path: 'profile/:id/:view', component: ProfileComponent},
  { path: 'portfolio/:id', redirectTo: '/portfolio/:id/view', pathMatch: 'full' },
  { path: 'portfolio/:id/:view', component: PortfolioComponent},
  { path: '', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
