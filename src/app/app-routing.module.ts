import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadService } from './shared/services/preload.service';

const routes: Routes = [
  {path:'employees', loadChildren:() => import('./home/home.module').then(c => c.HomeModule),data:{preload:false}},
  {path:'',redirectTo:'employees',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadService})],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
