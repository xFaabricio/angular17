import { CommonModule } from '@angular/common';
import { Component, Renderer2, ElementRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  darkMode: boolean = false;
  dropdownActive: boolean = false;

  constructor(private cookieService: CookieService, private renderer: Renderer2, private el: ElementRef) {       
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

  dropdownMenuAction(): void {
    if(this.dropdownActive){
      this.removeClassById('dropdown-menu', 'open');
      this.dropdownActive = false;
    }else{
      this.addClassById('dropdown-menu', 'open');
      this.dropdownActive = true;
    }
  }

  removeClassById(id: string, classe: string) {
    const element = this.el.nativeElement.querySelector(`#${id}`);
    if (element) {
      this.renderer.removeClass(element, classe);
    }
  }

  addClassById(id: string, classe: string) {
    const element = this.el.nativeElement.querySelector(`#${id}`);
    if (element) {
      this.renderer.addClass(element, classe);
    }
  }  

}
