import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;
  getemployeeById(id: number) {
    throw new Error('Method not implemented.');
  }
  getEmployeeById(id: number) {
    throw new Error('Method not implemented.');
  }
  
  private baseURL = "http://localhost:8081/api/v1/employee";

  constructor(private httpClient:HttpClient) { }
  
  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  addEmployee(employee:Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  updateEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }
  updateEmployee(id:number,employee:Employee):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);
  }
  deleteEmployee(id:number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


 
}

