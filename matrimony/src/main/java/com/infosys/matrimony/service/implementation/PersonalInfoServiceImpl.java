package com.infosys.matrimony.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.infosys.matrimony.entity.PersonalInfo;
import com.infosys.matrimony.entity.Registration;
import com.infosys.matrimony.repository.PersonalInfoRepository;
// import com.infosys.matrimony.repository.RegistrationRepo;
import com.infosys.matrimony.service.PersonalInfoService;
// import com.vaadin.flow.component.upload.receivers.MultiFileMemoryBuffer;
// import com.vaadin.server.StreamResource;
// import com.vaadin.ui.Image;
// import com.vaadin.ui.Upload;

// import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;




@Service
public class PersonalInfoServiceImpl implements PersonalInfoService {

    @Autowired
    private PersonalInfoRepository personalInfoRepository;

    @Override
    public PersonalInfo savePersonalInfo(MultipartFile file, String bloodGroup, Registration registration) throws IOException {

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

    @Override
    public PersonalInfo savePersonalInfo(PersonalInfo personalInfo) {
        throw new UnsupportedOperationException("Unimplemented method 'savePersonalInfo'");
    }
}