package com.infosys.matrimony.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infosys.matrimony.entity.Message;
import com.infosys.matrimony.repository.MessageRepo;
import com.infosys.matrimony.service.MessageService;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {
    
    @Autowired
    private MessageRepo messageRepo;

    @Override
    public Message saveMessage(Message message) {
        return messageRepo.save(message);
    }

    @Override
    public Message getMessageById(Long id) {
        return messageRepo.findById(id).orElse(null);
    }

    @Override
    public List<Message> getAllMessages() {
        return messageRepo.findAll();
    }

    @Override
    public Message updateMessage(Long id, Message updatedMessage) {
        if (messageRepo.existsById(id)) {
            updatedMessage.setId(id); 
            return messageRepo.save(updatedMessage);
        }
        return null; 
    }

    @Override
    public void deleteMessage(Long id) {
        messageRepo.deleteById(id);
    }
}
