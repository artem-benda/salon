package ru.abenda.salonapi.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@ConfigurationProperties(prefix="salon")
public class SalonDetailsProperties {
	private String name;
	private String address;
	private String city;
	private String state;
	private String zipcode;
	private String phone;
}
