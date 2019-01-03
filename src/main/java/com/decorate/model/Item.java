package com.decorate.model;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @author 002465
 */
@Data
public class Item extends BaseEntity implements Serializable{


    private Long itemTypeId;

    private String name;

    private String unit;

    private Byte unitPrice;

    private String remark;

    private Date createTime;

    private Date updateTime;

    private Boolean invalid;

    private Long operateId;

    private String memo;

    private ItemType itemType;

    private String itemTypeName;

}