package com.decorate.service;

import com.decorate.exception.ServiceException;
import com.decorate.model.ConstructionProject;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/9/26 19:32
 * @since v1.0.0
 */
public interface ConstructionProjectService{
    void saveOrUpdate(ConstructionProject entity)throws ServiceException;
}
