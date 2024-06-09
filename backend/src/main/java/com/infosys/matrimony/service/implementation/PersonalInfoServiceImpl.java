package com.infosys.matrimony.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.infosys.matrimony.entity.PersonalInfo;
import com.infosys.matrimony.entity.Registration;
import com.infosys.matrimony.repository.PersonalInfoRepository;
import com.infosys.matrimony.service.PersonalInfoService;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PersonalInfoServiceImpl implements PersonalInfoService {

    @Autowired
    private PersonalInfoRepository personalInfoRepository;

    @Override
    public PersonalInfo createPersonalInfo(MultipartFile file, String bloodGroup, Registration registration) throws IOException {
        PersonalInfo personalInfo = new PersonalInfo();
        personalInfo.setBloodGroup(bloodGroup);
        personalInfo.setRegistration(registration);

        if (file != null && !file.isEmpty()) {
            personalInfo.setPhotograph(file.getBytes());
        }

        return personalInfoRepository.save(personalInfo);
    }

    @Override
    public PersonalInfo getPersonalInfoById(Long id) {
        return personalInfoRepository.findById(id).orElse(null);
    }

    @Override
    public List<PersonalInfo> getAllPersonalInfo() {
        List<PersonalInfo> allImages = personalInfoRepository.findAll();
        return allImages.stream()
            .map(info -> new PersonalInfo(info.getId(), info.getPhotograph(), info.getBloodGroup(), info.getRegistration()))
            .collect(Collectors.toList());
    }

    @Override
    public PersonalInfo updatePersonalInfo(Long id, MultipartFile file, String bloodGroup, Registration registration) throws IOException {
        PersonalInfo personalInfo = personalInfoRepository.findById(id).orElse(null);
        if (personalInfo != null) {
            personalInfo.setBloodGroup(bloodGroup);
            personalInfo.setRegistration(registration);

            if (file != null && !file.isEmpty()) {
                personalInfo.setPhotograph(file.getBytes());
            }

            return personalInfoRepository.save(personalInfo);
        }
        return null; 
    }

    @Override
    public void deletePersonalInfo(Long id) {
        personalInfoRepository.deleteById(id);
    }

}
