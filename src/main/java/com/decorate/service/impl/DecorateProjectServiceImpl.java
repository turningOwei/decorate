package com.decorate.service.impl;

import com.decorate.exception.ServiceException;
import com.decorate.mapper.DecorateProjectMapper;
import com.decorate.model.DecorateProject;
import com.decorate.service.DecorateProjectService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * 描述:
 *
 * @author turningOwei
 * @date 2019-02-02 22:01
 */
@Service
public class DecorateProjectServiceImpl implements DecorateProjectService {
    @Resource
    private DecorateProjectMapper decorateProjectMapper;
    @Override
    public List<DecorateProject> selectAll() {
        return decorateProjectMapper.selectAll();
    }

    @Override
    public void saveOrUpdate(DecorateProject entity) throws ServiceException {
        saveOrUpdate(decorateProjectMapper,entity);
    }

    @Override
    public DecorateProject selectByPrimaryKey(Long id) {
        return decorateProjectMapper.selectByPrimaryKey(id);
    }

    @Override
    public void deleteByPrimaryKey(Long id) {
        decorateProjectMapper.deleteByPrimaryKey(id);
    }
}
