package com.decorate.controller;

import com.decorate.model.ConstructionType;
import com.decorate.service.ConstructionTypeService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/9/26 19:51
 * @since v1.0.0
 */
@RestController
public class ConstructionTypeController {
    @Resource
    private ConstructionTypeService constructionTypeService;

    @RequestMapping("/constructionType/selectAll")
    public List<ConstructionType> selectAll(){
        List<ConstructionType> list = constructionTypeService.selectAll();
        return list;
    }
}
