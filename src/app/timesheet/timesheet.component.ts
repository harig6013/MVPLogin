import { Component, OnInit } from '@angular/core';
import { TimesheetService } from '../timesheet.service';
import { EmployeeAttendance } from '../employee-attendance';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit{
  attendance: EmployeeAttendance[] = [];
  newAttendance: EmployeeAttendance = new EmployeeAttendance();

  constructor(private timesheetService: TimesheetService) { }

  ngOnInit(): void {
   this.loadAttendance();
    
  }

  loadAttendance() {
    this.timesheetService.getAllAttendances().subscribe(res => {
      this.attendance=res;
console.log(res);
    });
  }

  recordAttendance() {
    this.timesheetService.recordAttendance(this.newAttendance).subscribe(data => {
      this.newAttendance = new EmployeeAttendance();
      console.log(data);
      this.loadAttendance();
    });
  }
}
