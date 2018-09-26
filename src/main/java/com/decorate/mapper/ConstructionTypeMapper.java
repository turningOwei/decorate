package com.decorate.mapper;

import com.decorate.model.ConstructionType;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

/** 施工项目类型
 * @author 002465
 */
@Mapper
@Component
public interface ConstructionTypeMapper {
    int deleteByPrimaryKey(Long id);

    int insert(ConstructionType record);

    int insertSelective(ConstructionType record);

    ConstructionType selectByPrimaryKey(Long id);

    /**
     * 查询所有施工项目类型
     * @return
     */
    List<ConstructionType>  selectAll();

    List<ConstructionType>  selectAllRelateType();

    int updateByPrimaryKeySelective(ConstructionType record);

    int updateByPrimaryKey(ConstructionType record);
}