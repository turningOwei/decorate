Ext.define('Module.roomPlace.AddOrEditForm', {
    //requires      : ['Module.permission.role.RoleLocalCombobox','Module.corp.Department'],
    xtype         : 'roomPlaceAddOrEditForm',
    extend 		  : 'ExtUx.form.CusForm',
    defaults: {
        anchor: '100%'
    },
    items         :[{
        fieldLabel: '房间位置名称',
        name: 'roomPlaceName',
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
        fieldLabel: 'projectId',
        hidden:true,
        name: 'projectId'
    },{
        fieldLabel: 'invalid',
        hidden:true,
        name: 'invalid'
    }]
});