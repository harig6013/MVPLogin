import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeAttendance } from './employee-attendance';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  private baseUrl = 'http://localhost:8081/api/attendance';

  constructor(private http: HttpClient) { }

  recordAttendance(attendance: EmployeeAttendance): Observable<EmployeeAttendance> {
  
    return this.http.post<EmployeeAttendance>(`${this.baseUrl}/record`, attendance);
  }

  getAllAttendances(): Observable<EmployeeAttendance[]> {
    
    return this.http.get<EmployeeAttendance[]>(`${this.baseUrl}/list`);
  }
}
