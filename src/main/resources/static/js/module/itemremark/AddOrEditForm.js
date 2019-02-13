Ext.define('Module.itemremark.AddOrEditForm', {
    requires: ['Module.itemtype.ItemTypeCombobox', 'Module.item.ItemCombobox'],
    xtype: 'itemremarkaddoreditform',
    extend: 'ExtUx.form.CusForm',
    defaults: {
        anchor: '100%'
    },
    items: [{
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
        itemId: "itemName",
        name: 'itemName',
        rawProp: 'itemName',
        //选择后每次都是重载
        queryCaching: false,
        xtype: 'itemcombobox',
        listeners: {
            select: function (combo, record, eOpts) {
                var itemId = record.get("id");
                Util.getCmp('itemId').setValue(itemId);
            },
            scope: this
        },
        scope: this,
        allowBlank: false
    }, {
        fieldLabel: '备注名称',
        name: 'name',
        allowBlank: false
    }, {
        fieldLabel: '备注文本',
        name: 'text',
        allowBlank: false,
        xtype: 'textarea',
        height: 100
    }, {
        fieldLabel: '排序',
        name: 'orderFlag',
        xtype: 'numberfield',
        minValue: 1,
        allowBlank: false
    }, {
        fieldLabel: 'id',
        hidden: true,
        name: 'id'
    }, {
        fieldLabel: 'itemTypeId',
        hidden: true,
        name: 'itemTypeId',
        itemId: 'itemTypeId',
    }, {
        fieldLabel: 'itemId',
        hidden: true,
        name: 'itemId',
        itemId: 'itemId',
    }, {
        fieldLabel: 'invalid',
        hidden: true,
        name: 'invalid'
    }],
    listeners: {
        setRawValueEvent: function (field, name, value,data) {
            if(name == 'itemTypeName'){
                var itemNameParams = {
                    itemTypeId: data['itemTypeId']
                };
                Util.getCmp('itemName').setParams(itemNameParams);
            }
        }
    },
});