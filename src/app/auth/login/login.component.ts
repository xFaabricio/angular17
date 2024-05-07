import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,    
            ButtonModule,
            CheckboxModule,
            InputTextModule,
            FormsModule,
            PasswordModule,
            RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  valCheck: string[] = ['remember'];
  password!: string;

  imageName: string = "";

  constructor(public el: ElementRef) { 
    const darkThemeElement = this.el.nativeElement.querySelector('[data-bs-theme="dark"]');
    const lightThemeElement = this.el.nativeElement.querySelector('[data-bs-theme="light"]');
    const navDarkThemeElement = this.el.nativeElement.querySelector('[data-bs-theme="nav-dark"]');
    
    if (darkThemeElement) {
      this.imageName = "logo-dark.svg";
    } else if (navDarkThemeElement) {
      this.imageName = "logo-dark-1.svg";
    }else {
      this.imageName = "logo.svg";
    }
  }

}
