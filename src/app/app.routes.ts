import { Routes } from '@angular/router';
import '@angular/localize/init';
import { LoginComponent } from './auth/login/login.component';
import { HomeContentComponent } from './home-content/home-content.component';

export const routes: Routes = [
    { path: '', component: HomeContentComponent },
    { path: 'auth/login', component: LoginComponent }
    ];
