import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, Observable, ReplaySubject, Subject, switchMap, tap } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { CrudService } from 'src/app/shared/services/CrudService';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends CrudService<Employee,number> {

  private employeeIDSubject = new ReplaySubject<number>;
  employeeSelected$ = this.employeeIDSubject.asObservable();


  constructor(protected http: HttpClient) {
    super(http, `${environment.api.baseUrl}/employees`);
   }

   getEmployeeDetail(id:number):void{
    this.employeeIDSubject.next(id);
   }
  employees$ =  this._http.get<Employee[]>(`${environment.api.baseUrl}/employees`).pipe(
    tap(data => console.log(JSON.stringify(data)))
  );


  selectedEmployee$ =  this.employeeSelected$.pipe(
    tap((value)=>console.log(`called ${value}`)),
    switchMap((id:number) => this._http.get<Employee>(`${environment.api.baseUrl}/employees/${id}`))
  );



}
