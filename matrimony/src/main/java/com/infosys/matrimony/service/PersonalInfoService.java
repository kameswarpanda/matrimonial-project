package com.infosys.matrimony.service;

import com.infosys.matrimony.entity.PersonalInfo;
import java.util.List;

public interface PersonalInfoService {
    
    PersonalInfo savePersonalInfo(PersonalInfo personalInfo);
    PersonalInfo getPersonalInfoById(Long id);
    List<PersonalInfo> getAllPersonalInfo();
    PersonalInfo updatePersonalInfo(Long id, PersonalInfo updatedPersonalInfo);
    void deletePersonalInfo(Long id);

}
