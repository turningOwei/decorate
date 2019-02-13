package com.decorate.controller;

import com.decorate.exception.ServiceException;
import com.decorate.model.Item;
import com.decorate.service.ItemService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.global.ExtGrid;
import com.global.ExtJsonForm;
import com.global.PageParam;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/10/15 15:56
 * @since v1.0.0
 */
@Controller
public class ItemController {
    @Resource
    private ItemService itemService;
    private Gson gson = new GsonBuilder().create();

    @RequestMapping("/item/selectAll.do")
    @ResponseBody
    public ExtGrid selectAll(PageParam<Item> pageParam, Long itemTypeId) {
        Page<Item> page = PageHelper.startPage(pageParam.getPage(),pageParam.getLimit())
                .doSelectPage(()-> itemService.selectAll());
        return getExtGrid(new PageInfo<>(page));
    }

    @RequestMapping("/item/selectByTypeId.do")
    @ResponseBody
    public ExtGrid selectByTypeId(PageParam<Item> pageParam, Long itemTypeId) {
        Assert.notNull(itemTypeId, "项目类型id不能为空");
        Page<Item> page = getPage(pageParam, itemTypeId);
        return getExtGrid(new PageInfo<>(page));
    }

    private Page<Item> getPage(PageParam<Item> pageParam, Long itemTypeId) {
        return PageHelper.startPage(pageParam.getPage(),pageParam.getLimit())
                .doSelectPage(()-> itemService.selectByItemTypeId(itemTypeId));
    }

    private ExtGrid getExtGrid(PageInfo<Item> pageInfo) {
        return new ExtGrid(pageInfo.getList(), pageInfo.getTotal(), true);
    }

    @RequestMapping("/item/selectAllByItemTypeId.do")
    @ResponseBody
    public ExtGrid selectAllByItemTypeId(PageParam<Item> pageParam, Long itemTypeId) {
        Page<Item> page = PageHelper.startPage(pageParam.getPage(),pageParam.getLimit())
                .doSelectPage(()-> itemService.selectAllByItemTypeId(itemTypeId));
        return getExtGrid(new PageInfo<>(page));
    }

    @RequestMapping("/item/save.do")
    @ResponseBody
    public ExtJsonForm save(Item entity) {
        try {
            itemService.saveOrUpdate(entity);
        } catch (ServiceException e) {
            e.printStackTrace();
            return new ExtJsonForm(false, "添加失败,请联系管理员!");
        }
        return new ExtJsonForm(true, entity);
    }

    @RequestMapping("/item/update.do")
    @ResponseBody
    public ExtJsonForm update(Item entity) {
        try {
            itemService.saveOrUpdate(entity);
        } catch (ServiceException e) {
            e.printStackTrace();
            return new ExtJsonForm(false, "更新失败,请联系管理员!");
        }
        return new ExtJsonForm(true, entity);
    }

    @RequestMapping("/item/selectByPrimaryKey.do")
    @ResponseBody
    public ExtJsonForm selectByPrimaryKey(Item type) {
        Item entity = itemService.selectByPrimaryKey(type.getId());
        return new ExtJsonForm(true, entity);
    }

    @RequestMapping("/item/deleteByPrimaryKey.do")
    @ResponseBody
    public ExtJsonForm deleteByPrimaryKey(Long id) {
        itemService.deleteByPrimaryKey(id);
        return new ExtJsonForm(true, "删除成功");
    }
}
