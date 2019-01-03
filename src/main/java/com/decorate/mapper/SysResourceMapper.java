package com.decorate.mapper;

import com.decorate.model.SysResource;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

/** 菜单
 * @author 002465
 */
@Mapper
@Component
public interface SysResourceMapper extends DecorateMapper<SysResource>{
}