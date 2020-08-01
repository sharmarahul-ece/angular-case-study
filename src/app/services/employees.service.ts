import { Employee } from './../shared/employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {

    constructor(private http: HttpClient) {}
    apiPath = 'http://localhost:3000';
    getAll() {
        return this.http.get(`${this.apiPath}/employees`);
    }

    add(employee: Employee) {
        return this.http.post(`${this.apiPath}/employees`, employee);
    }

    remove(eCode: string) {
        return this.http.delete(`${this.apiPath}/employees?eCode=${eCode}`);
    }

    update(eCode: string, employee: Employee) {
        return this.http.patch(`${this.apiPath}/employees?eCode=${eCode}`, employee);
    }
}