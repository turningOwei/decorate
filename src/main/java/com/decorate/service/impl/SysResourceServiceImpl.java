package com.decorate.service.impl;

import com.decorate.mapper.SysResourceMapper;
import com.decorate.model.SysResource;
import com.decorate.service.SysResourceService;
import com.global.RootNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * 描述:
 *
 * @author 002465
 * @created 2018/10/14 19:25
 * @since v1.0.0
 */
@Service
public class SysResourceServiceImpl implements SysResourceService{
    @Resource
    private SysResourceMapper sysResourceMapper;
    @Override
    public SysResource getRootNode(){
        SysResource root = getRootSysource();

        //List<SysRoleRes> list = sysRoleResService.getListByRole(account.getAccountRole().getDeptRoleId());

        List<SysResource> list = sysResourceMapper.selectAll();
        //List<SysResource> list = this.getListByAccount(account);
        if(list!=null&&list.size() > 0){
            root = fillChildren(list,root);
        }
        return root;
    }

    private SysResource getRootSysource() {
        return sysResourceMapper.selectByPrimaryKey(RootNode.getOid());
    }

    private SysResource  fillChildren(List<SysResource> list,SysResource node){
        List<SysResource> children = new ArrayList<>();
        for (SysResource sysResource : list) {
            if(sysResource!=null&&node.getOid().equals(sysResource.getParentId())){
                sysResource = fillChildren(list,sysResource);
                children.add(sysResource);
            }
        }
        node.setChildren(children);
        return node;
    }
}
