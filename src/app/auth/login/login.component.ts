import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import { SimpleHeaderComponent } from '../../simple-header/simple-header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,    
            ButtonModule,
            CheckboxModule,
            InputTextModule,
            FormsModule,
            PasswordModule,
            RouterModule,
            AppComponent,
            SimpleHeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  valCheck: string[] = ['remember'];
  password!: string;

  constructor(public appComponent: AppComponent) { }
}
