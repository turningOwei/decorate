package com.decorate.service;

import com.decorate.exception.ServiceException;
import com.decorate.model.ConstructionType;

import java.util.List;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/9/26 19:32
 * @since v1.0.0
 */
public interface ConstructionTypeService{
    void saveOrUpdate(ConstructionType entity)throws ServiceException;
    List<ConstructionType> selectAll();
}
