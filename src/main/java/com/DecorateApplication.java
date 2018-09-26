package com;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

/**
 * @author 002465
 */
@SpringBootApplication
/**@MapperScan(basePackages = {"com.decorate.mapper"})
@ComponentScan(basePackages = {"com.decorate.*"})
@EntityScan("com.decorate.model")*/
@MapperScan("com.decorate.mapper")
public class DecorateApplication {

	public static void main(String[] args) {
		SpringApplication.run(DecorateApplication.class, args);
	}
}
