import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import { SimpleHeaderComponent } from '../../simple-header/simple-header.component';
import { AuthenticationService } from '../../service/authentication.service';
import { response } from 'express';
import { JwtService } from '../../service/jwt.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        RouterModule,
        AppComponent,
        SimpleHeaderComponent
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

  valCheck: string[] = ['remember'];
  password!: string;
  username!: string;

  constructor(public appComponent: AppComponent, private router: Router, private authenticationService: AuthenticationService, private jwtService: JwtService) { }

  async authenticate() {    
    try{      
      const response = await this.authenticationService.authenticate(this.username, this.password).toPromise();
      console.log('Response: ', response);
      this.jwtService.setToken(response.token);      
      this.router.navigate(['/dashboard']);
    }catch(error){
      console.log('Error: ', error);
    }    
  }

}
