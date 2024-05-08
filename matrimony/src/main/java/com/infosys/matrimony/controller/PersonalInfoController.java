package com.infosys.matrimony.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.infosys.matrimony.entity.PersonalInfo;
import com.infosys.matrimony.service.PersonalInfoService;

import java.util.List;

@RestController
@RequestMapping("/api/personal-info")
public class PersonalInfoController {

    @Autowired
    private PersonalInfoService personalInfoService;

    @PostMapping
    public ResponseEntity<PersonalInfo> savePersonalInfo(@RequestBody PersonalInfo personalInfo) {
        PersonalInfo savedPersonalInfo = personalInfoService.savePersonalInfo(personalInfo);
        return new ResponseEntity<>(savedPersonalInfo, HttpStatus.CREATED);
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

    @PutMapping("/{id}")
    public ResponseEntity<PersonalInfo> updatePersonalInfo(@PathVariable Long id, @RequestBody PersonalInfo updatedPersonalInfo) {
        PersonalInfo personalInfo = personalInfoService.updatePersonalInfo(id, updatedPersonalInfo);
        if (personalInfo != null) {
            return new ResponseEntity<>(personalInfo, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePersonalInfo(@PathVariable Long id) {
        personalInfoService.deletePersonalInfo(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
