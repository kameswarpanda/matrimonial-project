package com.infosys.matrimony.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.infosys.matrimony.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
