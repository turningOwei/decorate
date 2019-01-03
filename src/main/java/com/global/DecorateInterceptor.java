package com.global;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/10/14 19:02
 * @since v1.0.0
 */
public class DecorateInterceptor implements HandlerInterceptor  {
    /*@Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String ctx = request.getContextPath();
        Map<String, String[]> map = request.getParameterMap();
        map.put("staticPath", ctx+"/static");
        return true;
    }*/
}
