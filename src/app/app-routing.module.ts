import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './home/feature/employee/employee.component';

import { EmployeeListComponent } from './home/ui/employee-list/employee-list.component';

const routes: Routes = [
  {path:'employees',component:EmployeeComponent},
 
  {path:'',redirectTo:'employees',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
