package com.decorate.mapper;

import com.decorate.model.BaseEntity;
import com.decorate.model.Item;

import java.util.List;

/**
 * 描述:
 *
 * @author turningOwei
 * @date 2018-12-23 21:08
 */
public interface DecorateMapper<T extends BaseEntity> {
    int deleteByPrimaryKey(Long id);

    int insert(T record);

    int insertSelective(T record);

    T selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(T record);

    int updateByPrimaryKey(T record);

    List<T> selectAll();
}
