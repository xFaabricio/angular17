import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: '/pt-BR', pathMatch: 'full' },
    { path: 'pt-BR', component: AppComponent },
    { path: 'en-US', component: AppComponent },
  ];
