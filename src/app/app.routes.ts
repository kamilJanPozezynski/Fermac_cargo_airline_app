import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AddAirlineFormComponent } from './components/pages/add-airline-form/add-airline-form.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'add-airline', component: AddAirlineFormComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)