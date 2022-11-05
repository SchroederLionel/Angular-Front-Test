import { Component, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EmployeeService } from '../../data-access/employee.service';
import { Employee } from 'src/app/models/employee';
import { UpsertEmployeeComponent } from '../../ui/upsert-employee/upsert-employee.component';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Output('employees')
  employeeList:Employee[] =[];
  constructor(public dialog:MatDialog, private employeeService:EmployeeService) { }

  ngOnInit(): void {
   this.getEmployees();
  }

  openUpsertEmployeeDialog(employee?: Employee):void {
    
    var _employee = employee as Employee ?? new Employee();
    console.log(typeof _employee);
    let isForCreation:boolean = employee == null ? true :false;
    
    let dialogRef = this.dialog.open(UpsertEmployeeComponent, {
      data:employee as Employee ?? new Employee(),
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(employee => {
  
      if(employee instanceof Employee ){
        if(isForCreation == true){
          this.employeeService.save(employee).subscribe({
            next:(newEmployee:Employee) => this.employeeList = this.employeeList.concat(newEmployee),
            error:(error) => console.log(error)
          }); 
        }else {
          this.employeeService.update(employee.id!,employee).subscribe({
            next:(update_employee:Employee) => 
              this.employeeList = this.employeeList.map(employee =>employee.id !== update_employee.id ? employee : update_employee),
            error:(error) => console.log(error)
          })
        }
      }
      
    });
 
  }


  

  private getEmployees() {
    this.employeeService.findAll().subscribe({
      next:(employees) => this.employeeList = employees,
      error:(error) => console.log(error)
    })
  }

  private deleteEmployee(employee:Employee){

  }

}
