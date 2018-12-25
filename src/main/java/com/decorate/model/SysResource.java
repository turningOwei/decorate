package com.decorate.model;

import lombok.Data;

import java.util.List;
@Data
public class SysResource extends BaseEntity {
    private Long dbId;

    private Integer corpId;

    private String text;

    private Long parentId;

    private String name;

    private String menuUrl;

    private String menuType;

    private String iconCls;

    private Integer isLeaf;

    private String jsClassName;

    private String roleKey;

    private Long oid;

    private Boolean isValid;

    private String validStatus;

    private List<SysResource> children;


}