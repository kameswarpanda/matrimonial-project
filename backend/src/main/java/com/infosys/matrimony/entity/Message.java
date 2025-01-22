package com.infosys.matrimony.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "message")
public class Message {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    private String email;
    
    private String location;
    
    private String date;
    
    private String time;


	@ManyToOne // Many messages can be associated with one registration
	@JoinColumn(name="rid")
	private Registration registration;

  
    
}
