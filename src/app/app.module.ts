import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './shared/ui/navigation/navigation.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { EmployeeListComponent } from './home/ui/employee-list/employee-list.component';
import { EmployeeComponent } from './home/feature/employee/employee.component';
import { ConfirmationDialogComponent } from './shared/ui/confirmation-dialog/confirmation-dialog.component';
import { UpsertEmployeeComponent } from './home/ui/upsert-employee/upsert-employee.component';
import { TypeSafeMatCellDefDirective } from './shared/directives/type-safe-mat-cell-def.directive';
import { DetailEmployeeComponent } from './home/ui/detail-employee/detail-employee.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    EmployeeListComponent,
    EmployeeComponent,
    ConfirmationDialogComponent,
    UpsertEmployeeComponent,
    TypeSafeMatCellDefDirective,
    DetailEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
