package com.decorate.service.impl;

import com.decorate.exception.ServiceException;
import com.decorate.mapper.ConstructionProjectMapper;
import com.decorate.mapper.ConstructionTypeMapper;
import com.decorate.model.ConstructionType;
import com.decorate.service.ConstructionTypeService;
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
public class ConstructionTypeServiceImpl implements ConstructionTypeService {
    @Resource
    private ConstructionTypeMapper mapper;
    @Override
    public void saveOrUpdate(ConstructionType entity) throws ServiceException {
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

    public List<ConstructionType>selectAll(){
        return mapper.selectAll();
    }
}
