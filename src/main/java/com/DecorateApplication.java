package com;

import javafx.application.Application;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.GsonHttpMessageConverter;
import org.springframework.web.servlet.DispatcherServlet;

import javax.annotation.Resource;
import javax.servlet.MultipartConfigElement;

/** DecorateApplication class
 * @author 002465
 * @date
 */
@SpringBootApplication
/**@MapperScan(basePackages = {"com.decorate.mapper"})
@ComponentScan(basePackages = {"com.decorate.*"})
@EntityScan("com.decorate.model")*/
@MapperScan("com.decorate.mapper")
public class DecorateApplication extends SpringBootServletInitializer {
	/**
	 * 自动注入spring boot默认的上传配置
	 */
	@Resource
	private MultipartConfigElement multipartConfigElement;
	@Resource
	private DispatcherServlet dispatcherServlet;
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(Application.class);
	}
	public static void main(String[] args) {
		SpringApplication.run(DecorateApplication.class, args);
	}

	/*@Bean 好像没用暂时注释掉
	public ServletRegistrationBean apiServlet() {
		ServletRegistrationBean bean = new ServletRegistrationBean(dispatcherServlet);
		//注入上传配置到自己注册的ServletRegistrationBean
		bean.addUrlMappings("*.do");
		bean.setMultipartConfig(multipartConfigElement);
		bean.setName("apiServlet");
		return bean;
	}*/

}
