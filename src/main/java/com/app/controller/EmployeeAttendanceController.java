package com.app.controller;

import java.time.Duration;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.EmployeeAttendanceEntity;
import com.app.repository.EmployeeAttendanceRepository;


@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeAttendanceController {
	
    @Autowired
    private EmployeeAttendanceRepository attendanceRepository;

    // API endpoints for managing attendance

    @PostMapping("/record")
    public ResponseEntity<EmployeeAttendanceEntity> recordAttendance(@RequestBody EmployeeAttendanceEntity attendance) {
        // Validate and process attendance data
        // Calculate duration
        attendance.setDuration(Duration.between(attendance.getInTime(), attendance.getOutTime()));
        EmployeeAttendanceEntity savedAttendance = attendanceRepository.save(attendance);
        return ResponseEntity.ok(savedAttendance);
    }

    @GetMapping("/list")
    public ResponseEntity<List<EmployeeAttendanceEntity>> getAllAttendances() {
        List<EmployeeAttendanceEntity> attendances = attendanceRepository.findAll();
        return ResponseEntity.ok(attendances);
    }
}
