import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  darkMode: boolean = false;

  constructor(private cookieService: CookieService) {    
    if (this.cookieService.check('darkMode')) {      
      this.darkMode = this.cookieService.get('darkMode') === 'true';
    } else {      
      this.cookieService.set('darkMode', this.darkMode.toString());
    }
    this.changeTheme();
  }

  updateDarkMode(event: any): void {
    if (event.target instanceof HTMLInputElement) {
      const checked = event.target.checked;
      this.darkMode = checked;
      this.cookieService.set('darkMode', this.darkMode.toString());
      this.changeTheme();
    }
  }

  changeTheme(): void {
    if (typeof window !== 'undefined') {
      const element = document.body as HTMLElement;
      element.dataset['bsTheme'] = this.darkMode ? "dark" : "light";
    }
  }

}
