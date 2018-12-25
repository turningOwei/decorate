package com.decorate.service;

import com.decorate.model.ItemType;

import java.util.List;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/9/26 19:32
 * @since v1.0.0
 */
public interface ItemTypeService extends BaseService<ItemType>{

    @Override
    List<ItemType> selectAll();
    @Override
    ItemType selectByPrimaryKey(Long id);
}
