import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterModule, ButtonModule, CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

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
