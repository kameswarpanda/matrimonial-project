package com.infosys.matrimony.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.matrimony.entity.EducationCareer;
import com.infosys.matrimony.repository.EducationCareerRepo;
import com.infosys.matrimony.service.EducationCareerService;

@Service
public class EducationCareerServiceImpl implements EducationCareerService{
 @Autowired
    private EducationCareerRepo educationCareerRepo;

    @Override
    public EducationCareer saveEducationCareer(EducationCareer educationCareer) {
        return educationCareerRepo.save(educationCareer);
    }

    @Override
    public EducationCareer getEducationCareerById(Long id) {
        return educationCareerRepo.findById(id).orElse(null);
    }

    @Override
    public List<EducationCareer> getAllEducationCareers() {
        return educationCareerRepo.findAll();
    }

    @Override
    public EducationCareer updateEducationCareer(Long id, EducationCareer updatedEducationCareer) {
        if (educationCareerRepo.existsById(id)) {
            updatedEducationCareer.setId(id); // Ensure the ID of the updated entity is set
            return educationCareerRepo.save(updatedEducationCareer);
        }
        return null; 
    }

    @Override
    public void deleteEducationCareer(Long id) {
        educationCareerRepo.deleteById(id);
    }
}
