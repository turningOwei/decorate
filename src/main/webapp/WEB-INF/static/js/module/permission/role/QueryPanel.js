/**
 * @author weip
 * @date 2016-12-17
 */
Ext.define('Module.permission.role.QueryPanel', {
    //dataUrl     :  SysConfig.ctx + '/permission/role/listNotGeneralManager.do',
    dataUrl     :  SysConfig.ctx + '/permission/role/listRoleByCorpIdAndAccountId.do',
    extend 		: 'ExtUx.grid.CusGrid',
    xtype  		: 'perminssionrolepanel',
    isQueryPage : true,
    isAutoLoad  : false,
    //plugins     : {ptype: 'cellediting', clicksToEdit: 1},
    rootVisible : false,
    initComponent : function() {
        var thiz = this;
        var selModel ={
            selType: 'checkboxmodel',
                mode   :'SINGLE',
                allowDeselect : true,
                checkOnly : true,
                listeners : {
                selectionchange:function( thisCmp, selected, eOpts ){
                    thiz.fireEvent('checkboxSelect',thiz,selected);
                },
                scope : this

            },
            scope : this

        };
        this.selModel = selModel;
        this.callParent();
    },
    buildFields     : function() {
        return [
            'id',
            'corpId',
            'moduleKey',
            'roleName',
            'roleAliasName',
            'bizSuperadmin',
            'remark',
            'description',
            'checked'
        ];
    },
    buildColumns	: function() {
        return [
            {text : '业务模块',     dataIndex : 'moduleKey',width:200},
            {text : '权限名称', dataIndex : 'roleName',width : 160},
            {text : '权限别名(员工职称)', dataIndex : 'roleAliasName',width:160},
            {text : '职称判断', dataIndex : 'bizSuperadmin',width:160},
            {text : '备注', dataIndex : 'remark',width:160},
            {text : '描述', dataIndex : 'description',width:160},
        ];
    }


});
