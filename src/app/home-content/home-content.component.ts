import { Component } from '@angular/core';
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
  
  constructor(public appComponent: AppComponent) { }

  faSun = faSun;
  faMoon = faMoon;
  faCloudMoon = faCloudMoon;

  changeTheme(theme: string, colorScheme: string) {
    this.appComponent.changeTheme(theme, colorScheme);
  }
}
