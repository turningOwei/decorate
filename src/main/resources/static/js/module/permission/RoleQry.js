/**
 * @author weip
 * @date 2017-01-16
 */
Ext.define('Module.permission.RoleQry', {
    dataUrl     :  SysConfig.ctx + '/permission/deptrole/listAll.do',
    extend 		: 'ExtUx.grid.CusGrid',
    xtype  		: 'permissionroleqry',
    isQueryPage : true,
    rootVisible : false,
    initComponent : function() {
        this.callParent();
    },
    buildFields     : function() {
        return [
            'oid',
            'name',
            'deptId',
            'departmentName',
            'isSuperAdmin',
            'aliasName',
            'memo'
        ];
    },
    buildColumns	: function() {
        return [
            {text : '角色名称',   dataIndex : 'name',width:200},
            {text : '部门',       dataIndex : 'departmentName',width : 160},
            {text : '超级管理员',    dataIndex : 'isSuperAdmin',width:160},
            {text : '别名',       dataIndex : 'bizModuleKey',width:160},
            {text : '备注',       dataIndex : 'roleName',width:160}
        ];
    }


});