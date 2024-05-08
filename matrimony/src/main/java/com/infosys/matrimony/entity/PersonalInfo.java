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
@Table(name = "personal_info")
public class PersonalInfo {
    
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "personal_id")
    private Long id;

    @Column(name = "photograph")
    private byte[] photograph;
    
    @Column(name = "blood_group")
    private String bloodGroup;

    @OneToOne
	@JoinColumn(name="rid")
	private Registration registration;
}
