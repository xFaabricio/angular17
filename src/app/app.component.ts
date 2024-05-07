import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeContentComponent } from './home-content/home-content.component';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule, HomeContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SevenHeads Project';  

  constructor(public layoutService: LayoutService){ }

  set theme(val: string) {
    this.layoutService.config.update((config) => ({
        ...config,
        theme: val,
    }));
  }
  get theme(): string {
      return this.layoutService.config().theme;
  }

  changeTheme(themeToChange: string, colorSchemeToChange: string) {
    this.theme = themeToChange;
    this.colorScheme = colorSchemeToChange;
  }

  set colorScheme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: val,
        }));
    }
    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }
}