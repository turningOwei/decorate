package com.mvc;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.concurrent.TimeUnit;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/10/13 19:02
 * @since v1.0.0
 */
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        //静态资源访问,spring boot默认在resources/static,想配置到webapp,失败,暂且这样
        //TODO 还是想配置到webaap
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
    }
}
