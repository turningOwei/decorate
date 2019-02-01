Ext.define('Module.item.AddOrEditForm', {
    requires      : ['Module.itemtype.ItemTypeCombobox'],
    xtype         : 'itemaddoreditform',
    extend 		  : 'ExtUx.form.CusForm',
    defaults: {
        anchor: '100%'
    },
    items         :[{

        xtype       : 'itemtypecombobox',
        fieldLabel  : '项目类型',
        //name        : 'itemType.name',
        rawProp	    : 'itemTypeName',
        allowBlank  :  false,
        //选择后每次都是重载
        queryCaching:  false,
        listeners : {
            select : function( combo, record, eOpts ){
                var itemTypeId = record.get("id");
                Util.getCmp('itemtypeid').setValue(itemTypeId);
            },
            scope : this
        },
        scope : this
    },{
        fieldLabel: '项目名称',
        name: 'name',
        allowBlank: false
    },{
        fieldLabel: '单位',
        name: 'unit',
        allowBlank: false
    },{
        fieldLabel: '单价',
        name: 'unitPrice',
        allowBlank: false
    },{
        fieldLabel: '排序',
        name: 'orderFlag',
        xtype:'numberfield',
        minValue: 1,
        allowBlank: false
    },{
        fieldLabel: 'id',
        hidden:true,
        name: 'id'
    },{
        itemId      : 'itemtypeid',
        fieldLabel: 'itemTypeId',
        hidden:true,
        name: 'itemTypeId'
    },{
        fieldLabel: 'invalid',
        hidden:true,
        name: 'invalid'
    }]
});