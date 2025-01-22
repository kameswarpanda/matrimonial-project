package com.infosys.matrimony.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "registrations")
public class Registration {

  @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="r_id")
	private Long rid;

	@Column(name="username", unique = true)
	private String userName;

	@Column(name="password")
	private String password;

	@Column(name="email_id")
	private String email;

	@JsonIgnore
	@OneToOne(mappedBy = "registration",  cascade = CascadeType.ALL)
	private User user;

	@JsonIgnore
	@OneToOne(mappedBy = "registration",  cascade = CascadeType.ALL)
	private EducationCareer educationCareer;

	@JsonIgnore
	@OneToOne(mappedBy = "registration",  cascade = CascadeType.ALL)
	private FamilyInfo family;

	@JsonIgnore
	@OneToOne(mappedBy = "registration",  cascade = CascadeType.ALL)
	private PersonalInfo personalInfo;

		@JsonIgnore
    @OneToMany(mappedBy = "registration", cascade = CascadeType.ALL) // Bidirectional relationship
    private List<Message> messages;

	

}
