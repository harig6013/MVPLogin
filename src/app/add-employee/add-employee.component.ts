import { Component , OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router: Router) { }
    data: any
 
  ngOnInit(): void {
  }
  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
      error => console.log(console));
  }
  goToEmployeeList(){
    this.router.navigate(['/employee']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
  
}
