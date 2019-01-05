Ext.define('Module.designer.template.Systemplate',{
    dataUrl     :  SysConfig.ctx + '/designer/systempate/listByPage.do',
    extend 		: 'ExtUx.grid.CusGrid',
    xtype  		: 'designersystempate',
    isQueryPage : true,
    plugins     : {ptype: 'cellediting', clicksToEdit: 1},
    rootVisible : false,
    //requires        : ['Module.account.AddOrEditWin','Module.permission.role.QueryPanel'],
    initComponent : function() {
        this.callParent();
    },
    buildFields     : function() {
        return [
            'oid',
            'corpId',
            'deptId',
            'pwd',
            'departmentName',
            'name',
            'mobilePhone',
            'email',
            'deptRoleId',
            'roleAliasName',
            'roleName'
        ];
    },
    buildColumns	: function() {
        return [
            {text : '部门',     dataIndex : 'departmentName',width:200},
            {text : '姓名',     dataIndex : 'name',width:200},
            {text : '联系电话', dataIndex : 'mobilePhone',width : 160},
            {text : '邮件地址', dataIndex : 'email',width:160},
            {text : '所属业务', dataIndex : 'bizModuleKey',width:160},
            {text : '角色名称', dataIndex : 'roleName',width:160},
            {text : '权限别名(员工职称)', dataIndex : 'roleName',width:160}
        ];
    },
    buildTbar       : function(){
        return  [
            {xtype  : 'button',text : '刷新',     listeners : refrushListeners    },
            {itemId : this.accountAdd,xtype  : 'button',text : '账户添加',disabled:false, listeners:accountAddListener},
            {itemId : this.accountEdit,xtype  : 'button',text : '账户修改', disabled:true,listeners:accountEditListeners}
        ];
    },
    listeners : {
        rowclick:function(thisViewTable, record, tr, rowIndex, e, eOpts ){
            //Util.getCmp(this.accountEdit).setDisabled(false);
        }
    }
});