import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DetailEmployeeComponent } from './ui/detail-employee/detail-employee.component';
import { EmployeeComponent } from './feature/employee/employee.component';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeComponent,
    DetailEmployeeComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
