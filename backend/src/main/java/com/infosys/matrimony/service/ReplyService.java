package com.infosys.matrimony.service;

import java.util.List;
import java.util.Optional;
import com.infosys.matrimony.entity.Reply;

public interface ReplyService {
    Reply saveReply(Reply reply);
    List<Reply> getAllReply();
    Optional<Reply> getReplyById(Long id);

    List<Reply> getReplyByEmail(String email); // Updated return type
    Reply updateReply(Long id, Reply reply);
    void deleteReply(Long id);

}

