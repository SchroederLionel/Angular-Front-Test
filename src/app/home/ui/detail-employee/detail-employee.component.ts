import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable,  Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../../data-access/employee.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit, OnDestroy {

  employeeDetail$?: Observable<Employee>;
  paramsSubscription$?:Subscription;

  constructor(private employeeService:EmployeeService,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeDetail$ = this.employeeService.selectedEmployee$
    this.paramsSubscription$ = this._route.paramMap.subscribe(
      (params:ParamMap) =>{
        const employeeId = Number(params.get('id'));
        this.employeeService.getEmployeeDetail(employeeId);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription$) this.paramsSubscription$.unsubscribe();
  }

}
