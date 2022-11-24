import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './feature/employee/employee.component';
import { DetailEmployeeComponent } from './ui/detail-employee/detail-employee.component';

const routes: Routes = [
  {path:'',component:EmployeeComponent},
  {path:'employees/:id',component:DetailEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
