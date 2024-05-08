package com.infosys.matrimony.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.matrimony.entity.Registration;
import com.infosys.matrimony.repository.RegistrationRepo;
import com.infosys.matrimony.service.RegistrationService;

import java.util.List;

@Service
public class RegistrationServiceImpl implements RegistrationService {
    
    @Autowired
    private RegistrationRepo registrationRepository;

    @Override
    public Registration saveRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }

    @Override
    public Registration getRegistrationById(Long id) {
        return registrationRepository.findById(id).orElse(null);
    }

    @Override
    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    @Override
    public Registration updateRegistration(Long id, Registration updatedRegistration) {
        if (registrationRepository.existsById(id)) {
            updatedRegistration.setRid(id); 
            return registrationRepository.save(updatedRegistration);
        }
        return null; 
    }

    @Override
    public void deleteRegistration(Long id) {
        registrationRepository.deleteById(id);
    }
    
}
