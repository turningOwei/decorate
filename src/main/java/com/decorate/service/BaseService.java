package com.decorate.service;

import com.decorate.exception.ServiceException;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/9/26 19:39
 * @since v1.0.0
 */
public interface BaseService<T> {
    void saveOrUpdate(T entity)throws ServiceException;
}
