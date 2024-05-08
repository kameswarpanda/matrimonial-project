package com.infosys.matrimony.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "education_career")
public class EducationCareer {
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
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
