package com.infosys.matrimony.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.infosys.matrimony.entity.Registration;
import com.infosys.matrimony.service.RegistrationService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/registrations")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping
    public ResponseEntity<Registration> saveRegistration(@RequestBody Registration registration) {
        Registration savedRegistration = registrationService.saveRegistration(registration);
        return new ResponseEntity<>(savedRegistration, HttpStatus.CREATED);
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<Registration> findByUserName(@PathVariable String username) {
        Registration registration = registrationService.findByUserName(username);
        if (registration != null) {
            return new ResponseEntity<>(registration, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
@GetMapping("/email/{email}")
    public ResponseEntity<Registration> findByEmail(@PathVariable String email) {
        Registration registration = registrationService.findByEmail(email);
        if (registration != null) {
            return new ResponseEntity<>(registration, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<List<Registration>> getAllRegistrations() {
        List<Registration> registrations = registrationService.getAllRegistrations();
        return new ResponseEntity<>(registrations, HttpStatus.OK);
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<Registration> updateRegistration(@PathVariable Long id, @RequestBody Registration updatedRegistration) {
        Registration registration = registrationService.updateRegistration(id, updatedRegistration);
        if (registration != null) {
            return new ResponseEntity<>(registration, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRegistration(@PathVariable Long id) {
        registrationService.deleteRegistration(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // @PostMapping("/register")
    // public ResponseEntity<Registration> registerUser(@RequestBody Registration registration) {
    //     Registration savedRegistration = registrationService.saveRegistration(registration);
    //     return new ResponseEntity<>(savedRegistration, HttpStatus.CREATED);
    // }

    // @GetMapping("/login")
    // public String login() {
    //     return "Please provide your username and password to login";
    // }
    
}
