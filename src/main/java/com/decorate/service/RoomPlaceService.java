package com.decorate.service;

import com.decorate.model.RoomPlace;

import java.util.List;

/**
 * 描述:
 *
 * @author turningOwei
 * @date 2019-02-02 16:00
 */
public interface RoomPlaceService extends BaseService<RoomPlace>{
    List<RoomPlace> selectByProjectId(Long projectId);
}
