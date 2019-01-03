package com.decorate.mapper;

import com.decorate.model.ItemRemark;
import com.decorate.model.ItemRemarkPo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;
@Mapper
@Component
public interface ItemRemarkMapper extends DecorateMapper<ItemRemark>{

    List<ItemRemark> selectByItemId(Long itemId);
    List<ItemRemarkPo> selectAllJoinItemType(@Param("itemTypeName") String itemTypeName);
}