package com.decorate.mapper;

import com.decorate.model.ItemType;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

/** 施工项目类型
 * @author 002465
 */
@Mapper
@Component
public interface ItemTypeMapper extends DecorateMapper<ItemType>{
    ItemType selectNameByPrimaryKey(Long id);

    List<ItemType> selectAllRelateType();
}