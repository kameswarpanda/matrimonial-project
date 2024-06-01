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

	public Long getRid() {
		return rid;
	}

	public void setRid(Long rid) {
		this.rid = rid;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public EducationCareer getEducationCareer() {
		return educationCareer;
	}

	public void setEducationCareer(EducationCareer educationCareer) {
		this.educationCareer = educationCareer;
	}

	public FamilyInfo getFamily() {
		return family;
	}

	public void setFamily(FamilyInfo family) {
		this.family = family;
	}

	public PersonalInfo getPersonalInfo() {
		return personalInfo;
	}

	public void setPersonalInfo(PersonalInfo personalInfo) {
		this.personalInfo = personalInfo;
	}

}
