import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "/api/v1/employees";
  constructor(private httpClient:HttpClient) { }

  getEmployeesList():Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee:Employee): Observable<Object>{
    return this.httpClient.post<Employee>(`${this.baseUrl}`,employee);
  }

  getEmployeeById(id:number):Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
  }

  updateEmployee(employee:Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseUrl}/${employee.id}`,employee);
  }

}