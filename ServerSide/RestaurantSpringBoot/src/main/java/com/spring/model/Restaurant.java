package com.spring.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="restaurant")
public class Restaurant
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int rest_id;
	@Column(name="rest_name")
	private String rest_name;
	@Column(name="rest_address")
	private String rest_address;
	@Column(name="phone")
	private long phone;
	@Column(name="open_time")
	private String open_time;
	@Column(name="close_time")
	private String close_time;
	
	public Restaurant() {
		System.out.println("hiiiii");
		//super();
	}
	public Restaurant(String rest_name, String rest_address, long phone, String open_time, String close_time) {
		super();
		this.rest_name = rest_name;
		this.rest_address = rest_address;
		this.phone = phone;
		this.open_time = open_time;
		this.close_time = close_time;
	}
	public int getRest_id() {
		return rest_id;
	}
	public void setRest_id(int rest_id) {
		this.rest_id = rest_id;
	}
	public String getRest_name() {
		return rest_name;
	}
	public void setRest_name(String rest_name) {
		this.rest_name = rest_name;
	}
	public String getRest_address() {
		return rest_address;
	}
	public void setRest_address(String rest_address) {
		this.rest_address = rest_address;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getOpen_time() {
		return open_time;
	}
	public void setOpen_time(String open_time) {
		this.open_time = open_time;
	}
	public String getClose_time() {
		return close_time;
	}
	public void setClose_time(String close_time) {
		this.close_time = close_time;
	}
	@Override
	public String toString() {
		return "Restaurant [rest_id=" + rest_id + ", rest_name=" + rest_name + ", rest_address=" + rest_address
				+ ", phone=" + phone + ", open_time=" + open_time + ", close_time=" + close_time + "]";
	}
}
