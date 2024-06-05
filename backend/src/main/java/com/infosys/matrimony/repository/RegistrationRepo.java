package com.infosys.matrimony.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.infosys.matrimony.entity.Registration;

public interface RegistrationRepo extends JpaRepository<Registration, Long>{
    Optional<Registration> findByUserName(String userName);
    Optional<Registration> findByEmail(String email);
} 
