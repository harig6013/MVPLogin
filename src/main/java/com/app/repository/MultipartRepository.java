package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.MultipartEntity;

public interface MultipartRepository extends JpaRepository<MultipartEntity, Long> {
}
