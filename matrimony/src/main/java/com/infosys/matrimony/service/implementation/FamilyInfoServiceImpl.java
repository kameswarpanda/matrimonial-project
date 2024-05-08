package com.infosys.matrimony.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.matrimony.entity.FamilyInfo;
import com.infosys.matrimony.repository.FamilyInfoRepo;
import com.infosys.matrimony.service.FamilyInfoService;

@Service
public class FamilyInfoServiceImpl implements FamilyInfoService{
    @Autowired
    private FamilyInfoRepo familyInfoRepo;

    @Override
    public FamilyInfo saveFamilyInfo(FamilyInfo familyInfo) {
        return familyInfoRepo.save(familyInfo);
    }

    @Override
    public FamilyInfo getFamilyInfoById(Long id) {
        return familyInfoRepo.findById(id).orElse(null);
    }

    @Override
    public FamilyInfo updateFamilyInfo(Long id, FamilyInfo updatedFamilyInfo) {
        if (familyInfoRepo.existsById(id)) {
            updatedFamilyInfo.setId(id); 
            return familyInfoRepo.save(updatedFamilyInfo);
        }
        return null; 
    }

    @Override
    public void deleteFamilyInfo(Long id) {
        familyInfoRepo.deleteById(id);
    }
}
