package com.infosys.matrimony.service;

import java.util.List;
import java.util.Optional;

import com.infosys.matrimony.entity.Contact;

public interface ContactService {
    Contact saveContact(Contact contact);
    List<Contact> getAllContacts();
    Optional<Contact> getContactById(Long id);
    Contact updateContact(Long id, Contact contact);
    void deleteContact(Long id);
}

