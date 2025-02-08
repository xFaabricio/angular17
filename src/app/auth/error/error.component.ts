import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { SimpleHeaderComponent } from '../../simple-header/simple-header.component';
import { AppComponent } from '../../app.component';

@Component({
    selector: 'app-error',
    standalone: true,
    imports: [RouterModule, ButtonModule, CommonModule, SimpleHeaderComponent],
    templateUrl: './error.component.html',
    styleUrl: './error.component.scss'
})
export class ErrorComponent {
  constructor(public appComponent: AppComponent) { }
}
