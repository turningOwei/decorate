package com.decorate.model;

import lombok.Data;

/**
 * 描述:
 *
 * @author turningOwei
 * @date 2019-02-13 9:45
 */
@Data
public class BudgetListPo extends BudgetList{
    private String itemName;
    private String itemUnit;
    private String itemUnitPrice;
    private String itemTypeName;
    private Long itemTypeId;
}
