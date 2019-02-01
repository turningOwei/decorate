package com.decorate.model;

import lombok.Data;

/**
 * 描述:
 *
 * @author turningOwei
 * @date 2018-12-25 22:29
 */
@Data
public class ItemRemarkPo extends ItemRemark {
    private Long itemTypeId;
    private String itemTypeName;
    private String itemName;
    private Integer orderFlag;
}
