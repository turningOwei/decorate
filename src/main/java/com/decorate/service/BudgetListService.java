package com.decorate.service;

import com.decorate.model.BudgetList;
import com.decorate.model.BudgetListPo;

import java.util.List;

/**
 * 描述:
 *
 * @author turningOwei
 * @date 2019-02-03 15:13
 */
public interface BudgetListService extends BaseService<BudgetList>{
    List<BudgetListPo> selectByRoomPlaceId(Long roomPlaceId);

    BudgetListPo selectByPrimaryKeyWithItem(Long id);
}
