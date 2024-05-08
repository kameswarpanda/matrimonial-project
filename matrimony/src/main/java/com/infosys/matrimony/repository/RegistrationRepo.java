package com.infosys.matrimony.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.infosys.matrimony.entity.Registration;

public interface RegistrationRepo extends JpaRepository<Registration, Long>{
    
} 
