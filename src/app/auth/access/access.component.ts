import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [RouterModule, ButtonModule, CommonModule],
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss'
})
export class AccessComponent {

}
