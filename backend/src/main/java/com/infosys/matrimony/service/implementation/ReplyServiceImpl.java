package com.infosys.matrimony.service.implementation;

import com.infosys.matrimony.entity.Reply;
import com.infosys.matrimony.repository.ReplyRepository;
import com.infosys.matrimony.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReplyServiceImpl implements ReplyService {
    @Autowired
    private ReplyRepository replyRepository;

    @Override
    public Reply saveReply(Reply reply) {
        return this.replyRepository.save(reply);
    }

    @Override
    public List<Reply> getAllReply() {
        return replyRepository.findAll();
    }

    @Override
    public Optional<Reply> getReplyById(Long id) {
        return replyRepository.findById(id);
    }
    @Override
    public List<Reply> getReplyByEmail(String email) {
        return replyRepository.findByEmail(email); // Updated method implementation
    }

    @Override
    public Reply updateReply(Long id, Reply reply) {
        if (replyRepository.existsById(id)) {
            reply.setId(id);
            return replyRepository.save(reply);
        }
        throw new RuntimeException("Contact not found");
    }

    @Override
    public void deleteReply(Long id) {
        replyRepository.deleteById(id);
    }


}

