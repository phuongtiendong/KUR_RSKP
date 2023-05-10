package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Proxy;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "users")
@Proxy(lazy=false)
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userid;
	@Column(length = 30)
    private String name;
	@Column(length = 30)
    private String email;
	@Column(length = 30)
    private String password;
	@Column(length = 10)
    private String contact_no;
	@Column(length = 30)
    private String address;
	@Column(length = 30)
    @Enumerated(EnumType.STRING)
    private Role role;
}