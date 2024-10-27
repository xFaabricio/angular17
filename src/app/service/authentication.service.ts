import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    authenticate(username : string, password : string) {        

        const headers = new HttpHeaders({  
            'Content-Type': 'application/json',
            'Accept': '*/*'
          });

        const body = { "login": username, "password": password };

        return this.http.post<any>(`/api-sevenheads/auth/authenticate`, body, { headers });        
    }

}
