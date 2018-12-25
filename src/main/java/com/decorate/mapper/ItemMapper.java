package com.decorate.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author turningOwei
 * 添加component即可定义为spring容器bean
 */
@Mapper
@Component
public interface ItemMapper<T> extends DecorateMapper{

    List<T> selectByTypeId(Long itemTypeId);

}