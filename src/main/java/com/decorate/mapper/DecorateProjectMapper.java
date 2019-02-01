package com.decorate.mapper;

import com.decorate.model.DecorateProject;

public interface DecorateProjectMapper {
    int deleteByPrimaryKey(Long id);

    int insert(DecorateProject record);

    int insertSelective(DecorateProject record);

    DecorateProject selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(DecorateProject record);

    int updateByPrimaryKey(DecorateProject record);
}