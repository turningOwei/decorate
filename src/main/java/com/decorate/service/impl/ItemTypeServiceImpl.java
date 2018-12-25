package com.decorate.service.impl;

import com.decorate.exception.ServiceException;
import com.decorate.mapper.ItemTypeMapper;
import com.decorate.model.ItemType;
import com.decorate.service.ItemTypeService;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

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
public class ItemTypeServiceImpl implements ItemTypeService {
    @Resource
    private ItemTypeMapper mapper;
    @Override
    public void saveOrUpdate(ItemType entity) throws ServiceException {
        saveOrUpdate(mapper,entity);
    }

    @Override
    public List<ItemType>selectAll(){
        return mapper.selectAll();
    }

    @Override
    public ItemType selectByPrimaryKey(Long id){
        return mapper.selectByPrimaryKey(id);
    }
}
