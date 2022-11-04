import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input("employeeList") employees: Employee[]=[];
  @Output() public employeeSelected = new EventEmitter<Employee>;

  
  public modifyEmployee(employee:Employee): void{
    this.employeeSelected.emit(employee);
  }

  displayedColumns:string[] = ['id', 'firstName', 'lastName','email','action'];
  constructor() { }
  
  ngOnInit(): void {
   
  }

 

}
