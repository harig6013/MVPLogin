import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HrTerminationComponent } from './hr-termination/hr-termination.component';
import { HrProbationComponent } from './hr-probation/hr-probation.component';
import { HrLeaveComponent } from './hr-leave/hr-leave.component';
import { AssetsManageComponent } from './assets-manage/assets-manage.component';
import { AuthGuard } from './services/auth.guard';
import { ClaimsComponent } from './claims/claims.component';
import { DocumentsComponent } from './documents/documents.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
const routes: Routes = [
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'termination',
    component: HrTerminationComponent
  },
  {
    path: 'probation',
    component: HrProbationComponent
  },
  {
    path: 'leave',
    component: HrLeaveComponent
  },
  {
    path: 'assets',
    component: AssetsManageComponent
  },
  {
    path:'claims',
    component : ClaimsComponent
  },
  {
    path: 'documents',
    component:DocumentsComponent
  },
  {
    path:'emp-details',
    component:EmployeeDetailsComponent
  },
  {
    path:'timesheet',
    component:TimesheetComponent
  },
  { path:'employee' ,component:EmployeListComponent},
  {path:"addEmployee",component:AddEmployeeComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
