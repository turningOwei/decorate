package com.decorate.service.impl;

import com.decorate.exception.ServiceException;
import com.decorate.mapper.ProjectRelateRoomMapper;
import com.decorate.mapper.RoomPlaceMapper;
import com.decorate.model.ProjectRelateRoom;
import com.decorate.model.RoomPlace;
import com.decorate.model.vo.RoomPlaceValidateAddVo;
import com.decorate.service.RoomPlaceService;
import com.util.exception.AssertUtils;
import com.util.exception.RoomPlaceException;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * 描述:
 *
 * @author turningOwei
 * @date 2019-02-02 16:04
 */
@Service
public class RoomPlaceServiceImpl implements RoomPlaceService {
    @Resource
    private RoomPlaceMapper roomPlaceMapper;
    @Resource
    private ProjectRelateRoomMapper projectRelateRoomMapper;

    @Override
    public List<RoomPlace> selectAll() {
        return roomPlaceMapper.selectAll();
    }

    @Override
    public List<RoomPlace> selectByProjectId(Long projectId) {
        return roomPlaceMapper.selectByProjectId(projectId);
    }

    @Override
    public void saveByCustomizeFlag(RoomPlace entity, Long projectId, boolean customizeFlag) throws ServiceException {

        //自定义房间位置
        if (customizeFlag) {
            RoomPlace po = roomPlaceMapper.selectByRoomPlaceName(entity.getRoomPlaceName());
            AssertUtils.isTrue(po != null, RoomPlaceException.NAME_REPEACT);
            roomPlaceMapper.insert(entity);
        }

        ProjectRelateRoom projectRelateRoom = new ProjectRelateRoom();
        projectRelateRoom.setProjectId(projectId);
        projectRelateRoom.setRoomId(entity.getId());
        projectRelateRoomMapper.insert(projectRelateRoom);
    }

    @Override
    public RoomPlaceValidateAddVo validAdd(String customizeRoomPlaceName) {
        RoomPlaceValidateAddVo vo = new RoomPlaceValidateAddVo();
        RoomPlace po = roomPlaceMapper.selectByRoomPlaceName(customizeRoomPlaceName);
        if(po !=null){
            vo.setValidate(false);
            vo.setMsg("已存在相同名称的房间位置");
        }else {
            vo.setValidate(true);
        }
        return vo;
    }

    @Override
    public void saveOrUpdate(RoomPlace entity) throws ServiceException {
        //新增判断名称不可重复
        //if (entity.getId() == null) {
        //    RoomPlace po = roomPlaceMapper.selectByRoomPlaceName(entity.getRoomPlaceName());
        //    AssertUtils.isTrue(po != null, RoomPlaceException.NAME_REPEACT);
        //}
        saveOrUpdate(roomPlaceMapper, entity);
    }

    @Override
    public RoomPlace selectByPrimaryKey(Long id) {
        return roomPlaceMapper.selectByPrimaryKey(id);
    }

    @Override
    public void deleteByPrimaryKey(Long id) {
        roomPlaceMapper.deleteByPrimaryKey(id);
    }
}
