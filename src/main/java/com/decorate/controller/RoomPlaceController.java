package com.decorate.controller;

import com.decorate.exception.ServiceException;
import com.decorate.model.ItemType;
import com.decorate.model.RoomPlace;
import com.decorate.service.RoomPlaceService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.global.ExtGrid;
import com.global.ExtJsonForm;
import com.global.PageParam;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * 描述:
 *
 * @author turningOwei
 * @date 2019-02-02 16:00
 */
@Controller
public class RoomPlaceController {
    @Resource
    private RoomPlaceService roomPlaceService;
    @RequestMapping(value = "roomPlace/selectAll")
    public ExtGrid selectAll(){
        List<RoomPlace> roomPlaces = roomPlaceService.selectAll();
        return new ExtGrid(roomPlaces);
    }

    @RequestMapping("/roomPlace/save.do")
    @ResponseBody
    public ExtJsonForm save(RoomPlace entity){
        try {
            roomPlaceService.saveOrUpdate(entity);
        } catch (ServiceException e) {
            e.printStackTrace();
            return new ExtJsonForm(false,"添加失败,请联系管理员!");
        }
        return new ExtJsonForm(true,entity);
    }

    @RequestMapping("/roomPlace/update.do")
    @ResponseBody
    public ExtJsonForm update(RoomPlace entity){
        try {
            roomPlaceService.saveOrUpdate(entity);
        } catch (ServiceException e) {
            e.printStackTrace();
            return new ExtJsonForm(false,"更新失败,请联系管理员!");
        }
        return new ExtJsonForm(true,entity);
    }

    @RequestMapping("/roomPlace/selectByPrimaryKey.do")
    @ResponseBody
    public ExtJsonForm selectByPrimaryKey(RoomPlace roomPlace){
        RoomPlace entity = roomPlaceService.selectByPrimaryKey(roomPlace.getId());
        return new ExtJsonForm(true,entity);
    }

    @RequestMapping("/roomPlace/deleteByPrimaryKey.do")
    @ResponseBody
    public ExtJsonForm deleteByPrimaryKey(Long id){
        roomPlaceService.deleteByPrimaryKey(id);
        return new ExtJsonForm(true,"删除成功");
    }

    @RequestMapping("/roomPlace/selectAll.do")
    @ResponseBody
    public ExtGrid selectAll(PageParam<RoomPlace> pageParam){
        Page<RoomPlace> page = PageHelper.startPage(pageParam.getPage(),pageParam.getLimit())
                .doSelectPage(()-> roomPlaceService.selectAll());
        return getExtGrid(new PageInfo<>(page));
    }
    private ExtGrid getExtGrid(PageInfo<RoomPlace> pageInfo) {
        return new ExtGrid(pageInfo.getList(), pageInfo.getTotal(), true);
    }

    @RequestMapping("/roomPlace/selectByProjectId.do")
    @ResponseBody
    public ExtGrid selectByProjectId(PageParam<RoomPlace> pageParam,Long projectId){
        Page<RoomPlace> page = PageHelper.startPage(pageParam.getPage(),pageParam.getLimit())
                .doSelectPage(()-> roomPlaceService.selectByProjectId(projectId));
        return getExtGrid(new PageInfo<>(page));
    }
}
