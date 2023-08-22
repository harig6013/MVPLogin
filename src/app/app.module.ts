import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HrTerminationComponent } from './hr-termination/hr-termination.component';
import { HrProbationComponent } from './hr-probation/hr-probation.component';
import { HrLeaveComponent } from './hr-leave/hr-leave.component';
import { AssetsManageComponent } from './assets-manage/assets-manage.component';
import { AuthGuard } from './services/auth.guard';
import { DocumentsComponent } from './documents/documents.component';
import { ClaimsComponent } from './claims/claims.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    HrTerminationComponent,
    HrProbationComponent,
    HrLeaveComponent,
    AssetsManageComponent,
    DocumentsComponent,
    ClaimsComponent,
    EmployeeDetailsComponent,
    TimesheetComponent,
    AddEmployeeComponent,
    EmployeListComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
