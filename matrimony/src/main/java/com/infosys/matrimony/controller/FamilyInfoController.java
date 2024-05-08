package com.infosys.matrimony.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.infosys.matrimony.entity.FamilyInfo;
import com.infosys.matrimony.service.FamilyInfoService;

@RestController
@RequestMapping("/api/family-info")
public class FamilyInfoController {

    @Autowired
    private FamilyInfoService familyInfoService;

    @PostMapping
    public ResponseEntity<FamilyInfo> saveFamilyInfo(@RequestBody FamilyInfo familyInfo) {
        FamilyInfo savedFamilyInfo = familyInfoService.saveFamilyInfo(familyInfo);
        return new ResponseEntity<>(savedFamilyInfo, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FamilyInfo> getFamilyInfoById(@PathVariable Long id) {
        FamilyInfo familyInfo = familyInfoService.getFamilyInfoById(id);
        if (familyInfo != null) {
            return new ResponseEntity<>(familyInfo, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<FamilyInfo> updateFamilyInfo(@PathVariable Long id, @RequestBody FamilyInfo updatedFamilyInfo) {
        FamilyInfo familyInfo = familyInfoService.updateFamilyInfo(id, updatedFamilyInfo);
        if (familyInfo != null) {
            return new ResponseEntity<>(familyInfo, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFamilyInfo(@PathVariable Long id) {
        familyInfoService.deleteFamilyInfo(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}

