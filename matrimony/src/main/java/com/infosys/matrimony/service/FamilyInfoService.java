package com.infosys.matrimony.service;

import com.infosys.matrimony.entity.FamilyInfo;

public interface FamilyInfoService {
    FamilyInfo saveFamilyInfo(FamilyInfo familyInfo);
    FamilyInfo getFamilyInfoById(Long id);
    FamilyInfo updateFamilyInfo(Long id, FamilyInfo updatedFamilyInfo);
    void deleteFamilyInfo(Long id);
}
