package com.decorate.service.impl;

import com.decorate.exception.ServiceException;
import com.decorate.mapper.ItemMapper;
import com.decorate.model.Item;
import com.decorate.service.ItemService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/9/26 19:32
 * @since v1.0.0
 */
@Service
public class ItemServiceImpl implements ItemService {
    @Resource
    private ItemMapper<Item> itemMapper;

    @Override
    public List<Item> selectAll() {
        return itemMapper.selectAll();
    }

    @Override
    public void saveOrUpdate(Item entity) throws ServiceException {
        saveOrUpdate(itemMapper,entity);
    }

    @Override
    public List<Item> selectByItemTypeId(Long itemTypeId) {
        List<Item> list = itemMapper.selectByTypeId(itemTypeId);
        return itemMapper.selectByTypeId(itemTypeId);
    }

    @Override
    public Item selectByPrimaryKey(Long id) {
        Item item = (Item) itemMapper.selectByPrimaryKey(id);
        String itemTypeName = item.getItemType()==null?"":item.getItemType().getName();
        item.setItemTypeName(itemTypeName);
        return item;
    }
}
