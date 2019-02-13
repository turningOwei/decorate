Ext.define('Module.decorateProject.AddOrEditForm', {
    //requires      : ['Module.permission.role.RoleLocalCombobox','Module.corp.Department'],
    xtype         : 'decorateProjectAddOrEditForm',
    extend 		  : 'ExtUx.form.CusForm',
    jsonSubmit   : true,
    defaults: {
        anchor: '100%'
    },
    items         :[{
        fieldLabel: '排序',
        name: 'orderFlag',
        xtype:'numberfield',
        minValue: 1,
        allowBlank: false
    },{
        fieldLabel: '预算项目名称',
        name: 'projectName',
        allowBlank: false
    },{
        fieldLabel: '业主名称',
        name: 'ownerName',
        allowBlank: true
    },{
        fieldLabel: '业主电话',
        name: 'ownerMobile',
        allowBlank: true
    },{
        fieldLabel: '工程地址',
        name: 'projectAddress',
        allowBlank: true
    },{
        fieldLabel: '开工时间',
        name: 'projectStartTime',
        xtype:'datefield',
        format:'Y-m-d g:i:s',
        allowBlank: true,
        value: new Date()
    },{
        fieldLabel: '设计师',
        name: 'designer',
        allowBlank: true
    },{
        fieldLabel: '设计师电话',
        name: 'designerMobile',
        allowBlank: true
    },{
        fieldLabel: '施工负责人',
        name: 'constructionManager',
        allowBlank: true
    },{
        fieldLabel: '施工负责人电话',
        name: 'constructionManagerMobile',
        allowBlank: true
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