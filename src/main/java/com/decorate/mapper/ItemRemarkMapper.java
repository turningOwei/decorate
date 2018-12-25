package com.decorate.mapper;

import com.decorate.model.ItemRemark;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;
@Mapper
@Component
public interface ItemRemarkMapper extends DecorateMapper<ItemRemark>{

    List<ItemRemark> selectByItemId(Long itemId);

}