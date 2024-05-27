package com.infosys.matrimony.service;

import java.util.List;

import com.infosys.matrimony.entity.EducationCareer;

public interface EducationCareerService {

    EducationCareer saveEducationCareer(EducationCareer educationCareer);
    EducationCareer getEducationCareerById(Long id);
    List<EducationCareer> getAllEducationCareers();
    EducationCareer updateEducationCareer(Long id, EducationCareer updatedEducationCareer);
    void deleteEducationCareer(Long id);
}
