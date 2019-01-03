package com.decorate.controller;

import com.decorate.model.SysResource;
import com.decorate.service.SysResourceService;
import com.global.IndexResult;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.ServletWebRequest;

import javax.annotation.Resource;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/10/14 19:55
 * @since v1.0.0
 */
@Controller
public class GlobalController {
    @Resource
    private SysResourceService sysResourceService;

    @RequestMapping("/index")
    public String helloJsp(ModelMap modelMap, ServletWebRequest request) {
        String ctx = request.getContextPath();
        modelMap.put("ctx", ctx);
        modelMap.put("staticPath", ctx+"/static");
        IndexResult result = getResult();
        Gson gson = new GsonBuilder().serializeNulls().create();
        modelMap.put("result", gson.toJson(result));
        return "index";
    }

    private IndexResult getResult(){
        IndexResult result = new IndexResult();
        SysResource rootNode = sysResourceService.getRootNode();
       /* Resource rootNode = resourceService.getRootNodeByAccount(account);
        result.setMenuData(rootNode);*/
        result.setMenuData(rootNode);
        return result;
    }
}
