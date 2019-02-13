package com.decorate.service.impl;

import com.decorate.exception.ServiceException;
import com.decorate.mapper.BudgetListMapper;
import com.decorate.model.BudgetList;
import com.decorate.model.BudgetListPo;
import com.decorate.service.BudgetListService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * 描述:
 *
 * @author turningOwei
 * @date 2019-02-03 15:14
 */
@Service
public class BudgetListServiceImpl implements BudgetListService {
    @Resource
    private BudgetListMapper budgetListMapper;
    @Override
    public List<BudgetList> selectAll() {
        return budgetListMapper.selectAll();
    }

    @Override
    public void saveOrUpdate(BudgetList entity) throws ServiceException {
        saveOrUpdate(budgetListMapper,entity);
    }

    @Override
    public BudgetList selectByPrimaryKey(Long id) {
        return budgetListMapper.selectByPrimaryKey(id);
    }

    @Override
    public void deleteByPrimaryKey(Long id) {
        budgetListMapper.deleteByPrimaryKey(id);
    }

    @Override
    public List<BudgetListPo> selectByRoomPlaceId(Long roomPlaceId){
        return budgetListMapper.selectByRoomPlaceId(roomPlaceId);
    }

    @Override
    public BudgetListPo selectByPrimaryKeyWithItem(Long id) {
        return budgetListMapper.selectByPrimaryKeyWithItem(id);
    }
}
