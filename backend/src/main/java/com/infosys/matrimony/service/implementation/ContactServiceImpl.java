package com.infosys.matrimony.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.matrimony.entity.Contact;
import com.infosys.matrimony.repository.ContactRepository;
import com.infosys.matrimony.service.ContactService;

import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactService {
    @Autowired
    private ContactRepository contactRepository;

    @Override
    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @Override
    public Optional<Contact> getContactById(Long id) {
        return contactRepository.findById(id);
    }

    @Override
    public Contact updateContact(Long id, Contact contact) {
        if (contactRepository.existsById(id)) {
            contact.setId(id);
            return contactRepository.save(contact);
        }
        throw new RuntimeException("Contact not found");
    }

    @Override
    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }
}

