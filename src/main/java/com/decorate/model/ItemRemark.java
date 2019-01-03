package com.decorate.model;

import lombok.Data;

import java.util.Date;
/**
 * @author turningOwei
 */
@Data
public class ItemRemark extends BaseEntity {

    private Long itemId;

    private String name;

    private String text;

    private Date createTime;

    private Date updateTime;

    private Boolean invalid;

    private Long operateId;

    private String memo;

    private String itemName;

    private Item item;


}