package com.decorate.service.impl;

import com.decorate.exception.ServiceException;
import com.decorate.mapper.RoomPlaceMapper;
import com.decorate.model.RoomPlace;
import com.decorate.service.RoomPlaceService;
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

    @Override
    public List<RoomPlace> selectAll() {
        return roomPlaceMapper.selectAll();
    }
    @Override
    public List<RoomPlace> selectByProjectId(Long projectId) {
        return roomPlaceMapper.selectByProjectId(projectId);
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
