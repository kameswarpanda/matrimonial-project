package com.infosys.matrimony.service;

import com.infosys.matrimony.entity.Message;
import java.util.List;

public interface MessageService { 

    Message saveMessage(Message message);  
    Message getMessageById(Long id);  
    List<Message> getAllMessages(); 
    Message updateMessage(Long id, Message updatedMessage);
    void deleteMessage(Long id);    
    
}