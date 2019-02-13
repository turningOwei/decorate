Ext.define('Module.budgetList.AddOrEditForm', {
    xtype: 'budgetListAddOrEditForm',
    extend: 'ExtUx.form.CusForm',
    requires: ['Module.itemtype.ItemTypeCombobox', 'Module.item.ItemCombobox'],
    defaults: {
        anchor: '100%'
    },
    jsonSubmit: true,
    items: [{
        fieldLabel: '排序',
        name: 'orderFlag',
        xtype: 'numberfield',
        minValue: 1,
        allowBlank: false
    }, {
        fieldLabel: '项目类型名称',
        name: 'itemTypeName',
        rawProp: 'itemTypeName',
        //选择后每次都是重载
        queryCaching: false,
        xtype: 'itemtypecombobox',
        listeners: {
            select: function (combo, record, eOpts) {
                var itemTypeId = record.get("id");
                Util.getCmp('itemTypeId').setValue(itemTypeId);
                var itemNameParams = {
                    itemTypeId: itemTypeId
                };
                Util.getCmp('itemName').setParams(itemNameParams);
                Util.getCmp('itemName').reset();
            },
            scope: this
        },
        scope: this,
        allowBlank: false
    }, {
        fieldLabel: '项目名称',
        itemId: 'itemName',
        name: 'itemName',
        rawProp: 'itemName',
        allowBlank: false,
        queryCaching: false,
        xtype: 'itemcombobox',
        listeners: {
            select: function (combo, record, eOpts) {
                var itemId = record.get("id"),
                    unit = record.get('unit'),
                    unitPrice = record.get('unitPrice');
                Util.getCmp('itemId').setValue(itemId);
                Util.getCmp('itemUnit').setValue(unit);
                Util.getCmp('itemUnitPrice').setValue(unitPrice);
                Util.getCmp('discountItemUnitPrice').setValue(unitPrice);
                var quantity = Util.getCmp('quantity').getValue(),
                    unitPrice = Util.getCmp('itemUnitPrice').getValue();
                combo.ownerCt.computeTotal(unitPrice, quantity);
            },
            scope: this
        }
    }, {
        fieldLabel: '单位',
        name: 'itemUnit',
        allowBlank: false,
        itemId: 'itemUnit',
        editable: false,
        disabled: true
    }, {
        fieldLabel: '单价',
        name: 'itemUnitPrice',
        allowBlank: false,
        itemId: 'itemUnitPrice',
        editable: false,
        disabled: true
    }, {
        fieldLabel: '数量',
        name: 'quantity',
        itemId: 'quantity',
        xtype: 'numberfield',
        minValue: 1,
        allowBlank: false,
        listeners: {
            change: function (thisField, newValue, oldValue, eOpts) {
                var unitPrice = Util.getCmp('itemUnitPrice').getValue(),
                    discountUnitPrice = Util.getCmp('discountItemUnitPrice').getValue();
                thisField.ownerCt.computeTotal(unitPrice, newValue);
                thisField.ownerCt.computeDiscountTotal(discountUnitPrice, newValue);
            }
        }
    }, {
        fieldLabel: '合计',
        itemId: 'itemTotalPrice',
        name: 'itemTotalPrice',
        allowBlank: false,
        editable: false
    }, {
        fieldLabel: '折扣单价',
        xtype: 'numberfield',
        allowDecimals: true,
        decimalPrecision: 2,//默认两位小数
        minValue: 1,
        name: 'discountItemUnitPrice',
        allowBlank: false,
        itemId: 'discountItemUnitPrice',
        listeners: {
            change: function (thisField, newValue, oldValue, eOpts) {
                //折扣合计计算
                var quantity = Util.getCmp('quantity').getValue();
                thisField.ownerCt.computeDiscountTotal(newValue, quantity);
            }
        }
    }, {
        fieldLabel: '折扣后合计',
        itemId: 'discountItemTotalPrice',
        name: 'discountItemTotalPrice',
        allowDecimals: true,
        decimalPrecision: 2,//默认两位小数
        allowBlank: false,
        editable: false
    }, {
        fieldLabel: 'id',
        hidden: true,
        name: 'id'
    }, {
        fieldLabel: 'itemTypeId',
        hidden: true,
        name: 'itemTypeId',
        itemId: 'itemTypeId'
    }, {
        fieldLabel: 'itemId',
        hidden: true,
        name: 'itemId',
        itemId: 'itemId'
    }, {
        fieldLabel: 'roomPlaceId',
        hidden: true,
        name: 'roomPlaceId'
    }, {
        fieldLabel: 'invalid',
        hidden: true,
        name: 'invalid',
        value: true
    }],
    listeners: {
        setRawValueEvent: function (field, name, value, data) {
            if (name == 'itemTypeName') {
                var itemNameParams = {
                    itemTypeId: data['itemTypeId']
                };
                Util.getCmp('itemName').setParams(itemNameParams);
                //设定折扣价最大值
                Util.getCmp('discountItemUnitPrice').setMaxValue(data['itemUnitPrice']);
            }
        }
    },
    setEditFormParamObj: function (roomPlaceId) {
        var data = {
            'roomPlaceId': roomPlaceId
        };
        this.setValues(data);
    },
    computeTotal: function (unitPrice, quantity) {
        unitPrice = Ext.isEmpty(unitPrice) ? 0 : unitPrice;
        quantity = Ext.isEmpty(quantity) ? 0 : quantity;
        var itemTotalPrice = unitPrice * quantity;
        Util.getCmp('itemTotalPrice').setValue(itemTotalPrice);
    },
    computeDiscountTotal :function (discountUnitPrice, quantity) {
        discountUnitPrice = Ext.isEmpty(discountUnitPrice) ? 0 : discountUnitPrice;
        quantity = Ext.isEmpty(quantity) ? 0 : quantity;
        var totalPrice = discountUnitPrice * quantity;
        Util.getCmp('discountItemTotalPrice').setValue(totalPrice);
    }
});