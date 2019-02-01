package com.decorate.mapper;

import com.decorate.model.RoomPlace;

public interface RoomPlaceMapper {
    int deleteByPrimaryKey(Long id);

    int insert(RoomPlace record);

    int insertSelective(RoomPlace record);

    RoomPlace selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(RoomPlace record);

    int updateByPrimaryKey(RoomPlace record);
}