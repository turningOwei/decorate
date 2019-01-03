package com.decorate.controller;

import com.decorate.exception.ServiceException;
import com.decorate.model.Item;
import com.decorate.model.ItemRemark;
import com.decorate.model.ItemRemarkPo;
import com.decorate.service.ItemRemarkService;
import com.decorate.service.ItemService;
import com.global.ExtGrid;
import com.global.ExtJsonForm;
import com.global.PageParam;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
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
 * @created 2018/10/16 19:03
 * @since v1.0.0
 */
@Controller
public class ItemRemarkController {
    @Resource
    private ItemRemarkService itemRemarkService;
    private Gson gson = new GsonBuilder().create();
    @RequestMapping("/itemremark/selectAll.do")
    @ResponseBody
    public ExtGrid selectAll(PageParam<ItemRemarkPo> pageParam,
                             String itemTypeName,String itemName,String remarkName){
        //List<ItemRemark> list = itemRemarkService.selectAll();
        List<ItemRemarkPo> list = itemRemarkService
                .selectAllJoinItemType(itemTypeName,itemName,remarkName);
        pageParam.setList(list);
        ExtGrid result = new ExtGrid(list, 10, true);
        return result;
    }

    @RequestMapping("/itemremark/selectByItemId.do")
    @ResponseBody
    public ExtGrid selectByItemId(PageParam<ItemRemark> pageParam,Long itemTypeId){
        Assert.notNull(itemTypeId,"项目类型id不能为空");
        List<ItemRemark> list = itemRemarkService.selectByItemId(itemTypeId);
        pageParam.setList(list);
        return new ExtGrid(list,10,true);
    }

    @RequestMapping("/itemremark/save.do")
    @ResponseBody
    public ExtJsonForm save(ItemRemark entity){
        try {
            itemRemarkService.saveOrUpdate(entity);
        } catch (ServiceException e) {
            e.printStackTrace();
            return new ExtJsonForm(false,"添加失败,请联系管理员!");
        }
        return new ExtJsonForm(true,entity);
    }

    @RequestMapping("/itemremark/update.do")
    @ResponseBody
    public ExtJsonForm update(ItemRemark entity){
        try {
            itemRemarkService.saveOrUpdate(entity);
        } catch (ServiceException e) {
            e.printStackTrace();
            return new ExtJsonForm(false,"更新失败,请联系管理员!");
        }
        return new ExtJsonForm(true,entity);
    }

    @RequestMapping("/itemremark/selectByPrimaryKey.do")
    @ResponseBody
    public ExtJsonForm selectByPrimaryKey(ItemRemark itemRemark){
        ItemRemark entity= itemRemarkService.selectByPrimaryKey(itemRemark.getId());
        return new ExtJsonForm(true,entity);
    }

}
