package com.decorate.controller;

import com.decorate.exception.ServiceException;
import com.decorate.model.ItemRemark;
import com.decorate.model.ItemType;
import com.decorate.service.ItemTypeService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.global.ExtGrid;
import com.global.ExtJsonForm;
import com.global.PageParam;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/9/26 19:51
 * @since v1.0.0
 */
@Controller
public class ItemTypeController {
    @Resource
    private ItemTypeService itemTypeService;

    private ExtGrid getExtGrid(PageInfo<ItemType> pageInfo) {
        return new ExtGrid(pageInfo.getList(), pageInfo.getTotal(), true);
    }
    @RequestMapping("/itemType/selectAll.do")
    @ResponseBody
    public ExtGrid selectAll(PageParam<ItemType> pageParam){
        Page<ItemType> page = PageHelper.startPage(pageParam.getPage(),pageParam.getLimit())
                .doSelectPage(()-> itemTypeService.selectAll());
        return getExtGrid(new PageInfo<>(page));
    }

    @RequestMapping("/itemType/save.do")
    @ResponseBody
    public ExtJsonForm save(ItemType entity){
        try {
            itemTypeService.saveOrUpdate(entity);
        } catch (ServiceException e) {
            e.printStackTrace();
            return new ExtJsonForm(false,"添加失败,请联系管理员!");
        }
        return new ExtJsonForm(true,entity);
    }

    @RequestMapping("/itemType/update.do")
    @ResponseBody
    public ExtJsonForm update(ItemType entity){
        try {
            itemTypeService.saveOrUpdate(entity);
        } catch (ServiceException e) {
            e.printStackTrace();
            return new ExtJsonForm(false,"更新失败,请联系管理员!");
        }
        return new ExtJsonForm(true,entity);
    }

    @RequestMapping("/itemType/selectByPrimaryKey.do")
    @ResponseBody
    public ExtJsonForm selectByPrimaryKey(ItemType type){
        ItemType entity= itemTypeService.selectByPrimaryKey(type.getId());
        return new ExtJsonForm(true,entity);
    }

    /**
     * 变成下载
     * @return
     */
    @RequestMapping("/loginDownload")
    public ModelAndView loginDownload(){
        //Account account
        ModelAndView mv = new ModelAndView("index");
        mv.addObject("ctx","testCtx");
        return mv;
    }

    /**
     * 变成下载
     * @return
     */
    @RequestMapping("/login")
    public String login(){
        //Account account
        /*ModelAndView mv = new ModelAndView("index");
        mv.addObject("ctx","testCtx");*/
        return "login";
    }



    @RequestMapping("/test")
    public String test(Map<String, Object> map) {
        return "test";

    }

    @RequestMapping("/itemType/deleteByPrimaryKey.do")
    @ResponseBody
    public ExtJsonForm deleteByPrimaryKey(Long id){
        itemTypeService.deleteByPrimaryKey(id);
        return new ExtJsonForm(true,"删除成功");
    }
}
