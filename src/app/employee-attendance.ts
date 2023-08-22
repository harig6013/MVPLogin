import { Time } from "@angular/common";

export class EmployeeAttendance {
    employeeId!:BigInt;
    employeeName!:string;
    inTime!:Time;
    outTime!:Time;
    duration!:Time;
}
