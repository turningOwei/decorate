package com.decorate.service;

import com.decorate.model.SysResource;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/10/14 19:25
 * @since v1.0.0
 *///extends BaseService<SysResource>
public interface SysResourceService  {
    /**
     * 获取根节点
     * @return
     */
    SysResource getRootNode();
}
