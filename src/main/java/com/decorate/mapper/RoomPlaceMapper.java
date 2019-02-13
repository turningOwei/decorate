package com.decorate.mapper;

import com.decorate.model.RoomPlace;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface RoomPlaceMapper extends DecorateMapper<RoomPlace>{
    RoomPlace selectByRoomPlaceName(String roomPlaceName);
    List<RoomPlace> selectByProjectId(Long projectId);
}