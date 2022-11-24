import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  @Input("employees") employees$ : Observable<Employee[]> = of([]);

  @Output() public employeeSelected = new EventEmitter<Employee>;

  
  public modifyEmployee(employee:Employee): void{
    let employeeSelected =  new Employee();
    Object.assign(employeeSelected,employee);
    this.employeeSelected.emit(employeeSelected);
  }

  displayedColumns:string[] = ['id', 'firstName', 'lastName','email','action'];
  constructor() { }
  
}
