import { Routes } from '@angular/router';
import '@angular/localize/init';
import { LoginComponent } from './auth/login/login.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ErrorComponent } from './auth/error/error.component';
import { AccessComponent } from './auth/access/access.component';

export const routes: Routes = [
    { path: '', component: HomeContentComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/error', component: ErrorComponent },
    { path: 'auth/access', component: AccessComponent },
    { path: 'notfound', component: NotfoundComponent },
    { path: '**', redirectTo: '/notfound' }
    ];
