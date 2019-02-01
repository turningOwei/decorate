package com.decorate.mapper;

import com.decorate.model.BudgetList;

public interface BudgetListMapper {
    int deleteByPrimaryKey(Long id);

    int insert(BudgetList record);

    int insertSelective(BudgetList record);

    BudgetList selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(BudgetList record);

    int updateByPrimaryKey(BudgetList record);
}