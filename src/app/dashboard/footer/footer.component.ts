import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { LayoutService } from '../../service/app.layout.service';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [AppComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public layoutService: LayoutService, public appComponent: AppComponent) { }
}
