import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../service/app.layout.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [DividerModule,
            StyleClassModule,            
            PanelModule,
            ButtonModule,
            CommonModule],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss'
})
export class HomeContentComponent {
  
  constructor(public appComponent: AppComponent) { }

  changeTheme(theme: string, colorScheme: string) {
    this.appComponent.changeTheme(theme, colorScheme);
  }
}
