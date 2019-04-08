import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
