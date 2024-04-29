import { Component, ElementRef, Renderer2 } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [DividerModule,
            StyleClassModule,            
            PanelModule,
            ButtonModule,
            CommonModule,
            FontAwesomeModule],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss'
})
export class HomeContentComponent {

  faSun = faSun;
  faMoon = faMoon;
  faCloudMoon = faCloudMoon;

  colorScheme: string = 'light';
  theme: string = 'mdc-light-indigo';

  constructor(public appComponent: AppComponent, private cookieService: CookieService, private renderer: Renderer2, private el: ElementRef) {       
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
}
