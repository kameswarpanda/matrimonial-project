package com.infosys.matrimony.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "user_info")
public class User {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "info_id")
	private Long userId;

	@OneToOne
	@JoinColumn(name="rid")
	private Registration registration;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "age")
    private Integer age;

	@Column(name = "gender")
	private String gender;

	
}
