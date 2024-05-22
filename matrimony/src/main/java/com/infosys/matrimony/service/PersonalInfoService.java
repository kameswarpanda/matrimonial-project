package com.infosys.matrimony.service;

import com.infosys.matrimony.entity.PersonalInfo;
import com.infosys.matrimony.entity.Registration;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public interface PersonalInfoService {
    
    PersonalInfo savePersonalInfo(PersonalInfo personalInfo);
    PersonalInfo savePersonalInfo(MultipartFile file, String bloodGroup, Registration registration) throws IOException;
    PersonalInfo getPersonalInfoById(Long id);
    List<PersonalInfo> getAllPersonalInfo();
    PersonalInfo updatePersonalInfo(Long id, PersonalInfo updatedPersonalInfo);
    void deletePersonalInfo(Long id);

}
