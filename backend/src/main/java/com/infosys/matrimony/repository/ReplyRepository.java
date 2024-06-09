package com.infosys.matrimony.repository;


import com.infosys.matrimony.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
    List<Reply> findByEmail(String email); // New method
}
