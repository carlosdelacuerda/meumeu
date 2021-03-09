import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/public/error404/error404.component';
import { FilterCapricesComponent } from './components/public/filter-caprices/filter-caprices.component';
import { FilterTripsComponent } from './components/public/filter-trips/filter-trips.component';
import { HomeComponent } from './components/public/home/home.component';
import { ListCapricesComponent } from './components/public/list-caprices/list-caprices.component';
import { ListTripsComponent } from './components/public/list-trips/list-trips.component';
import { FormCapriceComponent } from './components/publish/form-caprice/form-caprice.component';
import { FormTripComponent } from './components/publish/form-trip/form-trip.component';
import { TypeComponent } from './components/publish/type/type.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'type', component: TypeComponent },
  { path: 'formTrip', component: FormTripComponent },
  { path: 'formCaprice', component: FormCapriceComponent },
  { path: 'listCaprice', component: FilterCapricesComponent },
  { path: 'listTrip', component: FilterTripsComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
