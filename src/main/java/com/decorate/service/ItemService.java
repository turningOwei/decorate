package com.decorate.service;

import com.decorate.exception.ServiceException;
import com.decorate.model.Item;

import java.util.List;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/9/26 19:32
 * @since v1.0.0
 */
public interface ItemService extends BaseService<Item>{
    List<Item> selectByItemTypeId(Long itemTypeId);
}
