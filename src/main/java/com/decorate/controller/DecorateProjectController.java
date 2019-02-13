package com.decorate.controller;

import com.decorate.exception.ServiceException;
import com.decorate.model.DecorateProject;
import com.decorate.model.Item;
import com.decorate.service.DecorateProjectService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.global.ExtGrid;
import com.global.ExtJsonForm;
import com.global.PageParam;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

/**
 * 描述:
 *
 * @author turningOwei
 * @date 2019-02-02 21:59
 */
@Controller
public class DecorateProjectController {
    @Resource
    private DecorateProjectService decorateProjectService;
    private ExtGrid getExtGrid(PageInfo<DecorateProject> pageInfo) {
        return new ExtGrid(pageInfo.getList(), pageInfo.getTotal(), true);
    }

    @RequestMapping("/decorateProject/selectAll.do")
    @ResponseBody
    public ExtGrid selectAll(PageParam<DecorateProject> pageParam) {
        Page<DecorateProject> page = PageHelper.startPage(pageParam.getPage(),pageParam.getLimit())
                .doSelectPage(()-> decorateProjectService.selectAll());
        return getExtGrid(new PageInfo<>(page));
    }

    @RequestMapping("/decorateProject/save.do")
    @ResponseBody
    public ExtJsonForm save(@RequestBody DecorateProject entity) {
        try {
            decorateProjectService.saveOrUpdate(entity);
        } catch (ServiceException e) {
            e.printStackTrace();
            return new ExtJsonForm(false, "添加失败,请联系管理员!");
        }
        return new ExtJsonForm(true, entity);
    }

    @RequestMapping("/decorateProject/update.do")
    @ResponseBody
    public ExtJsonForm update(@RequestBody DecorateProject entity) {
        try {
            decorateProjectService.saveOrUpdate(entity);
        } catch (ServiceException e) {
            e.printStackTrace();
            return new ExtJsonForm(false, "更新失败,请联系管理员!");
        }
        return new ExtJsonForm(true, entity);
    }

    @RequestMapping("/decorateProject/selectByPrimaryKey.do")
    @ResponseBody
    public ExtJsonForm selectByPrimaryKey(DecorateProject vo) {
        DecorateProject entity = decorateProjectService.selectByPrimaryKey(vo.getId());
        return new ExtJsonForm(true, entity);
    }

    @RequestMapping("/decorateProject/deleteByPrimaryKey.do")
    @ResponseBody
    public ExtJsonForm deleteByPrimaryKey(Long id) {
        decorateProjectService.deleteByPrimaryKey(id);
        return new ExtJsonForm(true, "删除成功");
    }
}
