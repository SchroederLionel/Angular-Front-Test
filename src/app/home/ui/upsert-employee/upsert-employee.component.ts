import { Component, Inject, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import {MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-upsert-employee',
  templateUrl: './upsert-employee.component.html',
  styleUrls: ['./upsert-employee.component.css']
})
export class UpsertEmployeeComponent  {
  public employee! :Employee;

  constructor(@Inject(MAT_DIALOG_DATA) employee:Employee,private dialogRef:MatDialogRef<UpsertEmployeeComponent>) {
    this.employee = employee;
  }

  public onSubmit():void{
    this.dialogRef.close(this.employee);
  }

}
