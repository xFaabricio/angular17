import { Component, ElementRef, ViewChild,  } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../service/app.layout.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-topbar',
    imports: [AppComponent, CommonModule, RouterLink],
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService, public appComponent: AppComponent) { }
}
