import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './shared/ui/navigation/navigation.component';
import { FooterComponent } from './shared/ui/footer/footer.component';

import { ConfirmationDialogComponent } from './shared/ui/confirmation-dialog/confirmation-dialog.component';
import { UpsertEmployeeComponent } from './home/ui/upsert-employee/upsert-employee.component';
import { TypeSafeMatCellDefDirective } from './shared/directives/type-safe-mat-cell-def.directive';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    ConfirmationDialogComponent,
    UpsertEmployeeComponent,
    TypeSafeMatCellDefDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
