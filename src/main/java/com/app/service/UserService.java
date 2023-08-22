package com.app.service;
import org.springframework.http.ResponseEntity;

import com.app.dto.UserDetails;

public interface UserService {

	ResponseEntity<?> loginUser(UserDetails userDetails);
}
