package com.decorate.service;

import com.decorate.model.ItemRemark;
import com.decorate.model.ItemRemarkPo;

import java.util.List;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/9/26 19:32
 * @since v1.0.0
 */
public interface ItemRemarkService extends BaseService<ItemRemark>{

    List<ItemRemark> selectByItemId(Long itemId);
    /**
     * 描述:
     * @auther: turningOwei
     * @param: [itemTypeName, itemName, name]
     * @return: java.util.List<com.decorate.model.ItemRemarkPo>
     * @date: 2018/12/25 22:53
     */
    List<ItemRemarkPo> selectAllJoinItemType(String itemTypeName,String itemName,String name);

}
