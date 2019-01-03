package com.decorate.model;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
/**
 * @author turningOwei
 */
@Data
public class ItemType extends BaseEntity implements Serializable{

    private String name;

    private Date createTime;

    private Date updateTime;

    private Boolean invalid = true;

    private Long operateId;

    private String memo;

    private List<Item> itemList;


}