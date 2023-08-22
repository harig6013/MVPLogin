package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.EmpDetailsEntity;
@Repository
public interface EmpDetailsRepository extends JpaRepository<EmpDetailsEntity, Long> {

}
