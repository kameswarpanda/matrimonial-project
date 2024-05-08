package com.infosys.matrimony.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.infosys.matrimony.entity.User;

public interface UserRepo extends JpaRepository<User, Long>{
    
}
