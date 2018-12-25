package com.decorate.service;

import com.decorate.exception.ServiceException;
import com.decorate.mapper.DecorateMapper;
import com.decorate.model.BaseEntity;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Optional;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/9/26 19:39
 * @since v1.0.0
 */
public interface BaseService<T extends BaseEntity> {
    default void saveOrUpdate(DecorateMapper<T> mapper,T entity)throws ServiceException {
        Optional.ofNullable(entity).orElseThrow(() -> new ServiceException("实体不能为空"));
        if(entity.getId() == null){
            mapper.insert(entity);
        }else {
            mapper.updateByPrimaryKey(entity);
        }
    }

    List<T> selectAll();

    void saveOrUpdate(T entity) throws ServiceException;
    /**
     * @param: id
     * @return: T
     * @date: 2018/12/24 9:30
     */
    T selectByPrimaryKey(Long id);
}
