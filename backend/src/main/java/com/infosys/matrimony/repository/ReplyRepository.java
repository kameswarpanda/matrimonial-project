package com.infosys.matrimony.repository;


import com.infosys.matrimony.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

import com.infosys.matrimony.entity.Contact;

import java.util.List;
import java.util.Optional;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
    List<Reply> findByEmail(String email); // New method
}
