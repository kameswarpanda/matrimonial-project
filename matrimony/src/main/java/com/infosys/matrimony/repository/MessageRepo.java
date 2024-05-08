package com.infosys.matrimony.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infosys.matrimony.entity.Message;

public interface MessageRepo extends JpaRepository<Message, Long>{

}
