package com.decorate.model;

import lombok.Data;

import java.util.Date;

/**
 * @author turningOwei
 */
@Data
public class BudgetList extends BaseEntity {

    private Long roomPlaceId;

    private Long itemId;

    private Integer quantity;

    private String remark;

    private Date createTime;

    private Date updateTime;

    private Boolean invalid;

    private Long operateId;

    private String memo;

    private Integer orderFlag;

    private String itemTotalPrice;

    private Item item;
    /**折扣单价*/
    private String discountItemUnitPrice;
    /**折扣后合计*/
    private String discountItemTotalPrice;

}