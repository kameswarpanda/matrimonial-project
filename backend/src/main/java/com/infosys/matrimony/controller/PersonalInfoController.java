package com.infosys.matrimony.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.infosys.matrimony.entity.PersonalInfo;
import com.infosys.matrimony.entity.Registration;
import com.infosys.matrimony.service.PersonalInfoService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/personal-info")
public class PersonalInfoController {

    @Autowired
    private PersonalInfoService personalInfoService;

    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<?> createPersonalInfo(
            @RequestParam("file") MultipartFile file,
            @RequestParam("bloodGroup") String bloodGroup,
            @RequestParam("registration") String registrationJson) {
        try {
            // Convert the registration JSON string to Registration object
            ObjectMapper objectMapper = new ObjectMapper();
            Registration registration = objectMapper.readValue(registrationJson, Registration.class);

            PersonalInfo personalInfo = personalInfoService.createPersonalInfo(file, bloodGroup, registration);
            return new ResponseEntity<>(personalInfo, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to upload file: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<PersonalInfo> getPersonalInfoById(@PathVariable Long id) {
        PersonalInfo personalInfo = personalInfoService.getPersonalInfoById(id);
        if (personalInfo != null) {
            return new ResponseEntity<>(personalInfo, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<List<PersonalInfo>> getAllPersonalInfo() {
        List<PersonalInfo> personalInfos = personalInfoService.getAllPersonalInfo();
        return new ResponseEntity<>(personalInfos, HttpStatus.OK);
    }

    @PutMapping(value = "/{id}", consumes = {"multipart/form-data"})
    public ResponseEntity<?> updatePersonalInfo(
            @PathVariable Long id,
            @RequestParam(value = "file", required = false) MultipartFile file,
            @RequestParam("bloodGroup") String bloodGroup,
            @RequestParam("registration") String registrationJson) {
        try {
            // Convert the registration JSON string to Registration object
            ObjectMapper objectMapper = new ObjectMapper();
            Registration registration = objectMapper.readValue(registrationJson, Registration.class);

            PersonalInfo updatedPersonalInfo = personalInfoService.updatePersonalInfo(id, file, bloodGroup, registration);
            if (updatedPersonalInfo != null) {
                return new ResponseEntity<>(updatedPersonalInfo, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to update personal info: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePersonalInfo(@PathVariable Long id) {
        personalInfoService.deletePersonalInfo(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
