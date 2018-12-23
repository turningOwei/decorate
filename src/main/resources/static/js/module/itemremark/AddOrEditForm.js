Ext.define('Module.itemremark.AddOrEditForm', {
    //requires      : ['Module.itemtype.ItemTypeCombobox'],
    xtype         : 'itemremarkaddoreditform',
    extend 		  : 'ExtUx.form.CusForm',
    defaults: {
        anchor: '100%'
    },
    items         :[{
        fieldLabel: '项目名称',
        name: 'itemName',
        allowBlank: false
    },{
        fieldLabel: '备注名称',
        name: 'name',
        allowBlank: false
    },{
        fieldLabel: '备注文本',
        name: 'text',
        allowBlank: false,
        xtype:'textarea',
        height:100
    },{
        fieldLabel: 'id',
        hidden:true,
        name: 'id'
    },{
        fieldLabel: 'itemId',
        hidden:true,
        name: 'itemId'
    },{
        fieldLabel: 'invalid',
        hidden:true,
        name: 'invalid'
    }]
});