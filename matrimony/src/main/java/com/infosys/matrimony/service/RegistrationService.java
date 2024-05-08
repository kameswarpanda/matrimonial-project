package com.infosys.matrimony.service;

import java.util.List;
import com.infosys.matrimony.entity.*;

public interface RegistrationService {

    Registration saveRegistration(Registration registration);
    Registration getRegistrationById(Long id);
    List<Registration> getAllRegistrations();
    Registration updateRegistration(Long id, Registration updatedRegistration);
    void deleteRegistration(Long id);
}
