package com.decorate.mapper;

import com.decorate.model.ConstructionProject;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
/**
 * 添加component即可定义为spring容器bean
 */
public interface ConstructionProjectMapper {
    int deleteByPrimaryKey(Long id);

    int insert(ConstructionProject record);

    int insertSelective(ConstructionProject record);

    ConstructionProject selectByPrimaryKey(Long id);
    List<ConstructionProject> selectByTypeId(Long constructionTypeId);

    int updateByPrimaryKeySelective(ConstructionProject record);

    int updateByPrimaryKey(ConstructionProject record);
}