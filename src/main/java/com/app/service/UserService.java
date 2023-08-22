package com.app.service;
import org.springframework.http.ResponseEntity;

import com.app.dto.UserDetails;

public interface UserService {

	ResponseEntity<UserDetails> loginUser(UserDetails userDetails);
}
