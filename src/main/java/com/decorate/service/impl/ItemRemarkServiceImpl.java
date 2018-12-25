package com.decorate.service.impl;

import com.decorate.exception.ServiceException;
import com.decorate.mapper.ItemRemarkMapper;
import com.decorate.model.ItemRemark;
import com.decorate.service.ItemRemarkService;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.List;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/10/16 18:48
 * @since v1.0.0
 */
@Service
public class ItemRemarkServiceImpl implements ItemRemarkService {
    @Resource
    private ItemRemarkMapper itemRemarkMapper;

    @Override
    public List<ItemRemark> selectAll() {
        return itemRemarkMapper.selectAll();
    }

    @Override
    public void saveOrUpdate(ItemRemark entity) throws ServiceException {
        saveOrUpdate(itemRemarkMapper,entity);
    }

    @Override
    public List<ItemRemark> selectByItemId(Long itemId) {
        List<ItemRemark> list = itemRemarkMapper.selectByItemId(itemId);
        if (!CollectionUtils.isEmpty(list)) {
            for (ItemRemark entity : list) {
                String itemName = entity.getItem() != null ? "" : entity.getItem().getName();
                entity.setItemName(itemName);
            }
        }
        return list;
    }

    @Override
    public ItemRemark selectByPrimaryKey(Long id) {
        ItemRemark entity = itemRemarkMapper.selectByPrimaryKey(id);
        if (entity != null) {
            String itemName = entity.getItem() == null ? "" : entity.getItem().getName();
            entity.setItemName(itemName);
        }
        return itemRemarkMapper.selectByPrimaryKey(id);
    }
}
