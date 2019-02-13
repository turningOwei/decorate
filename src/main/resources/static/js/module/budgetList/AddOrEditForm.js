Ext.define('Module.budgetList.AddOrEditForm', {
    xtype: 'budgetListAddOrEditForm',
    extend: 'ExtUx.form.CusForm',
    requires: ['Module.item.ItemCombobox'],
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
        fieldLabel: '项目名称',
        name: 'itemName',
        allowBlank: false,
        queryCaching: false,
        xtype: 'itemcombobox',
        listeners: {
            select: function (combo, record, eOpts) {
                var itemId = record.get("id"),
                    unit = record.get('unit'),
                    unitPrice = record.get('unitPrice');
                Util.getCmp('itemId').setValue(itemId);
                Util.getCmp('unit').setValue(unit);
                Util.getCmp('unitPrice').setValue(unitPrice);
            },
            scope: this
        }
    }, {
        fieldLabel: '单位',
        name: 'unit',
        allowBlank: false,
        itemId: 'unit',
        editable: false,
        disabled: true
    }, {
        fieldLabel: '单价',
        name: 'unitPrice',
        allowBlank: false,
        itemId: 'unitPrice',
        editable: false,
        disabled: true
    }, {
        fieldLabel: '数量',
        name: 'quantity',
        allowBlank: false,
        xtype: 'numberfield',
        minValue: 1,
        allowBlank: false,
        listeners: {
            change: function (thisField, newValue, oldValue, eOpts) {
                var unitPrice = Util.getCmp('unitPrice').getValue();
                unitPrice = Ext.isEmpty(unitPrice) ? 0 : unitPrice;
                var itemTotalPrice = unitPrice * newValue;
                Util.getCmp('itemTotalPrice').setValue(itemTotalPrice);
            }
        }
    }, {
        fieldLabel: '合计',
        itemId: 'itemTotalPrice',
        name: 'itemTotalPrice',
        allowBlank: false,
        editable: false
    }, {
        fieldLabel: 'id',
        hidden: true,
        name: 'id'
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
    setEditFormParamObj: function (roomPlaceId) {
        var data = {
            'roomPlaceId': roomPlaceId
        };
        this.setValues(data);
    }
});