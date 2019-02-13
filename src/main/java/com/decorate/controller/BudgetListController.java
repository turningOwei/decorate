package com.decorate.controller;

import com.decorate.exception.ServiceException;
import com.decorate.model.BudgetList;
import com.decorate.model.BudgetListPo;
import com.decorate.service.BudgetListService;
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
 * @date 2019-02-03 15:19
 */
@Controller
public class BudgetListController {
    @Resource
    private BudgetListService budgetListService;

    private ExtGrid getExtGrid(PageInfo<? extends BudgetList> pageInfo) {
        return new ExtGrid(pageInfo.getList(), pageInfo.getTotal(), true);
    }

    @RequestMapping("/budgetList/selectAll.do")
    @ResponseBody
    public ExtGrid selectAll(PageParam<BudgetList> pageParam) {
        Page<BudgetList> page = PageHelper.startPage(pageParam.getPage(), pageParam.getLimit())
                .doSelectPage(() -> budgetListService.selectAll());
        return getExtGrid(new PageInfo<>(page));
    }

    @RequestMapping("/budgetList/save.do")
    @ResponseBody
    public ExtJsonForm save(@RequestBody BudgetList entity) {
        try {
            budgetListService.saveOrUpdate(entity);
        } catch (ServiceException e) {
            e.printStackTrace();
            return new ExtJsonForm(false, "添加失败,请联系管理员!");
        }
        return new ExtJsonForm(true, entity);
    }

    @RequestMapping("/budgetList/update.do")
    @ResponseBody
    public ExtJsonForm update(@RequestBody BudgetList entity) {
        try {
            budgetListService.saveOrUpdate(entity);
        } catch (ServiceException e) {
            e.printStackTrace();
            return new ExtJsonForm(false, "更新失败,请联系管理员!");
        }
        return new ExtJsonForm(true, entity);
    }

    @RequestMapping("/budgetList/selectByPrimaryKey.do")
    @ResponseBody
    public ExtJsonForm selectByPrimaryKey(BudgetList vo) {
        BudgetList entity = budgetListService.selectByPrimaryKey(vo.getId());

        return new ExtJsonForm(true, entity);
    }

    @RequestMapping("/budgetList/selectByPrimaryKeyWithItem.do")
    @ResponseBody
    public ExtJsonForm selectByPrimaryKeyWithItem(BudgetList vo) {
        BudgetListPo entity = budgetListService.selectByPrimaryKeyWithItem(vo.getId());

        return new ExtJsonForm(true, entity);
    }

    @RequestMapping("/budgetList/deleteByPrimaryKey.do")
    @ResponseBody
    public ExtJsonForm deleteByPrimaryKey(Long id) {
        budgetListService.deleteByPrimaryKey(id);
        return new ExtJsonForm(true, "删除成功");
    }

    @RequestMapping("/budgetList/selectByRoomPlaceIdAndPage.do")
    @ResponseBody
    public ExtGrid selectByRoomPlaceIdAndPage(PageParam<BudgetList> pageParam, Long roomPlaceId) {
        Page<BudgetListPo> page = PageHelper.startPage(pageParam.getPage(), pageParam.getLimit())
                .doSelectPage(() -> budgetListService.selectByRoomPlaceId(roomPlaceId));
        return getExtGrid(new PageInfo<>(page));
    }

    @RequestMapping("/budgetList/selectByRoomPlaceId.do")
    @ResponseBody
    public ExtGrid selectByRoomPlaceId(PageParam<BudgetList> pageParam, Long roomPlaceId) {
        Page<BudgetListPo> page = PageHelper.startPage(pageParam.getPage(), pageParam.getLimit())
                .doSelectPage(() -> budgetListService.selectByRoomPlaceId(roomPlaceId));
        return getExtGrid(new PageInfo<>(page));
    }
}
