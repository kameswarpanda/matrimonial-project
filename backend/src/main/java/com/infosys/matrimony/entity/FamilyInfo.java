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
@Table(name = "family_info")
public class FamilyInfo {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "family_info_id")
    private Long id;

    @OneToOne
	@JoinColumn(name="rid")
	private Registration registration;

    @Column(name = "family_status")
    private String familyStatus;
    
    @Column(name = "family_type")
    private String familyType;

    @Column(name = "father_name")
    private String fatherName;

	 
    

}
