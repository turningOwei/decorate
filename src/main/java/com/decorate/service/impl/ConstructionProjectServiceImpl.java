package com.decorate.service.impl;

import com.decorate.exception.ServiceException;
import com.decorate.mapper.ConstructionProjectMapper;
import com.decorate.model.ConstructionProject;
import com.decorate.service.ConstructionProjectService;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import javax.annotation.Resource;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/9/26 19:32
 * @since v1.0.0
 */
@Service
public class ConstructionProjectServiceImpl implements ConstructionProjectService {
    @Resource
    private ConstructionProjectMapper mapper;
    @Override
    public void saveOrUpdate(ConstructionProject entity)throws ServiceException {
        Assert.notNull(entity,"实体不能为空");
        if(entity!=null){
            if(entity.getId() == null){
                mapper.insert(entity);
            }else {
                mapper.updateByPrimaryKey(entity);
            }
        }else {
            throw new ServiceException();
        }
    }
}
