package com.infosys.matrimony.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.matrimony.entity.PersonalInfo;
import com.infosys.matrimony.repository.PersonalInfoRepository;
import com.infosys.matrimony.service.PersonalInfoService;

import java.util.List;

@Service
public class PersonalInfoServiceImpl implements PersonalInfoService {
    
    @Autowired
    private PersonalInfoRepository personalInfoRepository;

    @Override
    public PersonalInfo savePersonalInfo(PersonalInfo personalInfo) {
        return personalInfoRepository.save(personalInfo);
    }

    @Override
    public PersonalInfo getPersonalInfoById(Long id) {
        return personalInfoRepository.findById(id).orElse(null);
    }

    @Override
    public List<PersonalInfo> getAllPersonalInfo() {
        return personalInfoRepository.findAll();
    }

    @Override
    public PersonalInfo updatePersonalInfo(Long id, PersonalInfo updatedPersonalInfo) {
        if (personalInfoRepository.existsById(id)) {
            updatedPersonalInfo.setId(id);
            return personalInfoRepository.save(updatedPersonalInfo);
        }
        return null; 
    }

    @Override
    public void deletePersonalInfo(Long id) {
        personalInfoRepository.deleteById(id);
    }
    
}

