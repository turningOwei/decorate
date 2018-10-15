Ext.define('Module.itemtype.AddOrEditForm', {
    //requires      : ['Module.permission.role.RoleLocalCombobox','Module.corp.Department'],
    xtype         : 'itemtypeaddoreditform',
    extend 		  : 'ExtUx.form.CusForm',
    defaults: {
        anchor: '100%'
    },
    items         :[{
        fieldLabel: '项目类型名称',
        name: 'name',
        allowBlank: false
    },{
        fieldLabel: 'id',
        hidden:true,
        name: 'id'
    },{
        fieldLabel: 'invalid',
        hidden:true,
        name: 'invalid'
    }]
});