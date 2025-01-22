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

@Data
@Entity
@Table(name = "education_career")
public class EducationCareer {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "education_id")
    private Long id;

    @Column(name = "education_level")
    private String educationLevel;
    
    @Column(name = "education_field")
    private String educationField;

    @OneToOne
	@JoinColumn(name="rid")
	private Registration registration;

}
