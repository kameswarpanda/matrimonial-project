package com.infosys.matrimony.service;

import com.infosys.matrimony.entity.User;
import java.util.List;

public interface UserService {
    
    User saveUser(User user);
    
    User getUserById(Long id);
    
    List<User> getAllUsers();
    
    User updateUser(Long id, User updatedUser);
    
    void deleteUser(Long id);
    
}

