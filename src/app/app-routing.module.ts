import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './home/feature/employee/employee.component';
import { DetailEmployeeComponent } from './home/ui/detail-employee/detail-employee.component';
import { PreloadService } from './shared/services/preload.service';

const routes: Routes = [
  // {path:'employees',component:EmployeeComponent},
  {path:'employees', loadChildren:() => import('./home/home.module').then(c => c.HomeModule),data:{preload:false}},
  {path:'',redirectTo:'employees',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadService})],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
