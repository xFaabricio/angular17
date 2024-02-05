import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: '/pt-BR', pathMatch: 'full' },
    { path: '/', component: AppComponent },
];
