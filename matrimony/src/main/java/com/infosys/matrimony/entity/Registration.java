package com.infosys.matrimony.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "registrations")
public class Registration {

    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="r_id")
	private Long rid;

	@Column(name="username")
	private String userName;

	@Column(name="password")
	private String password;

	@Column(name="email_id")
	private String email;

	@OneToOne(mappedBy = "registration")
	private User user;

	@OneToOne(mappedBy = "registration")
	private EducationCareer educationCareer;

	@OneToOne(mappedBy = "registration")
	private FamilyInfo family;

	@OneToOne(mappedBy = "registration")
	private PersonalInfo personalInfo;
}
