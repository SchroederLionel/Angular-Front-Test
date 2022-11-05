import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { CrudService } from 'src/app/shared/services/CrudService';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends CrudService<Employee,number> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.api.baseUrl}/employees`);
   }
}
