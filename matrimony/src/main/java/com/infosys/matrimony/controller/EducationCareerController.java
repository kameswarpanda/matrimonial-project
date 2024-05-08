package com.infosys.matrimony.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.infosys.matrimony.entity.EducationCareer;
import com.infosys.matrimony.service.EducationCareerService;

@RestController
@RequestMapping("/api/education-career")
public class EducationCareerController {

    @Autowired
    private EducationCareerService educationCareerService;

    @PostMapping
    public ResponseEntity<EducationCareer> saveEducationCareer(@RequestBody EducationCareer educationCareer) {
        EducationCareer savedEducationCareer = educationCareerService.saveEducationCareer(educationCareer);
        return new ResponseEntity<>(savedEducationCareer, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EducationCareer> getEducationCareerById(@PathVariable Long id) {
        EducationCareer educationCareer = educationCareerService.getEducationCareerById(id);
        if (educationCareer != null) {
            return new ResponseEntity<>(educationCareer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<EducationCareer>> getAllEducationCareers() {
        List<EducationCareer> educationCareers = educationCareerService.getAllEducationCareers();
        return new ResponseEntity<>(educationCareers, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EducationCareer> updateEducationCareer(@PathVariable Long id, @RequestBody EducationCareer updatedEducationCareer) {
        EducationCareer educationCareer = educationCareerService.updateEducationCareer(id, updatedEducationCareer);
        if (educationCareer != null) {
            return new ResponseEntity<>(educationCareer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEducationCareer(@PathVariable Long id) {
        educationCareerService.deleteEducationCareer(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}

