package com.infosys.matrimony.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.infosys.matrimony.entity.PersonalInfo;

public interface PersonalInfoRepository extends JpaRepository<PersonalInfo, Long> {

}
