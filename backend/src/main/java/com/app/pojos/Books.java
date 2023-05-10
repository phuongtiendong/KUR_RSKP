package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name="books")
public class Books {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonProperty("id")
	private Integer bookId;
	@Column(length = 30)
	private String bookName;
	@Column(length = 30)
	private String author;
	@Column(length = 30)
	private double price;
	@Column(length = 30)
	private String bookRating;
	@Column(length = 30)
	private Integer availableQty;
	@Column(length = 30)
	private String publishedDate;
}
