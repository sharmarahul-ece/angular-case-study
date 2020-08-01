import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}
    apiPath = 'http://localhost:3000';
    login( username: string, password: string) : Observable<boolean> {
        return this.http.get(`${this.apiPath}/auth?username=${username}&password=${password}`)
            .pipe(data => 
                new Observable<boolean>(s => s.next(data != null
            )));
    }
}