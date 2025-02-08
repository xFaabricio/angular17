import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { SimpleHeaderComponent } from "../../simple-header/simple-header.component";
import { AppComponent } from '../../app.component';

@Component({
    selector: 'app-access',
    templateUrl: './access.component.html',
    styleUrl: './access.component.scss',
    imports: [RouterModule, ButtonModule, CommonModule, SimpleHeaderComponent, AppComponent]
})
export class AccessComponent {  
  constructor(public appComponent: AppComponent) { }
}
