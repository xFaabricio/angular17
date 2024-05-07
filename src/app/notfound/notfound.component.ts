import { Component, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent {

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
