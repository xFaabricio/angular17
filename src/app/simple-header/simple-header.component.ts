import { Component, ElementRef, Renderer2 } from '@angular/core';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-simple-header',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './simple-header.component.html',
    styleUrl: './simple-header.component.scss'
})
export class SimpleHeaderComponent {

  faSun = faSun;
  faMoon = faMoon;
  faCloudMoon = faCloudMoon;

  colorScheme: string = 'light';
  theme: string = 'mdc-light-indigo';

  constructor(public appComponent: AppComponent,private cookieService: CookieService, private renderer: Renderer2, private el: ElementRef, private router: Router) {       
    if (this.cookieService.check('colorScheme')) {
      if(this.cookieService.get('colorScheme') === 'light') {        
        this.appComponent.changeTheme('mdc-light-indigo', 'light');        
      }else if(this.cookieService.get('colorScheme') === 'dark') {
        if(this.cookieService.get('theme') === 'bootstrap4-dark-blue') {          
          this.appComponent.changeTheme('bootstrap4-dark-blue', 'dark');          
        }else {          
          this.appComponent.changeTheme('mdc-dark-indigo', 'dark');          
        }
      }
    } else {      
      this.appComponent.changeTheme('mdc-light-indigo','light');      
    }    
  }

  changeTheme(themeView: string, colorSchemeView: string) {
    this.theme = themeView;
    this.colorScheme = colorSchemeView;        
    this.cookieService.set('theme', this.theme);
    this.cookieService.set('colorScheme', this.colorScheme);
    this.appComponent.changeTheme(this.theme, this.colorScheme);    
  }
  
  redirectToLanguage(language: string) {    
    const newUrl = `/${language}` + this.router.url;
    this.router.navigateByUrl(newUrl);
  }
}
