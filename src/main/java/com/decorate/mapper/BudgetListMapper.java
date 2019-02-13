package com.decorate.mapper;

import com.decorate.model.BudgetList;
import com.decorate.model.BudgetListPo;

import java.util.List;

/**
 * @author turningOwei
 */
public interface BudgetListMapper extends DecorateMapper<BudgetList>{
    /**
     * 描述:
     *
     * @auther turningOwei
     * @param roomPlaceId
     * @return  java.util.List<com.decorate.model.BudgetList>
     * @date 2019/2/3 15:18
     */
    List<BudgetListPo> selectByRoomPlaceId(Long roomPlaceId);

    BudgetListPo selectByPrimaryKeyWithItem(Long id);
}