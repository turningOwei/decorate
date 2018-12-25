package com.decorate.service;

import com.decorate.model.ItemRemark;

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

}
