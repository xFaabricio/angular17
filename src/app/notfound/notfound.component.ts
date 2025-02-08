import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { SimpleHeaderComponent } from '../simple-header/simple-header.component';

@Component({
    selector: 'app-notfound',
    standalone: true,
    imports: [RouterModule, AppComponent, SimpleHeaderComponent],
    templateUrl: './notfound.component.html',
    styleUrl: './notfound.component.scss'
})
export class NotfoundComponent {

  constructor(public appComponent: AppComponent) { }
}
