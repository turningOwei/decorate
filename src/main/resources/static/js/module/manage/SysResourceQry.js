/**
 * @author weip
 * @date 2016-12-17
 */
Ext.define('Module.manage.SysResourceQry', {
    //dataUrl     :  SysConfig.ctx + '/permission/managesysresource/list.do',
    dataUrl     :  SysConfig.ctx + '/permission/managesysroleres/listRoleResource.do',
    extend 		: 'ExtUx.grid.CusGrid',
    xtype  		: 'managesysresourceqry',
    isQueryPage : true,
    isAutoLoad  : false,
    rootVisible : false,
    initComponent : function() {
        this.callParent();
    },
    buildFields     : function() {
        return [
            'oid',
            'text',
            'parentId',
            'parentName',
            'name',
            'menuUrl',
            'menuType',
            'iconCls',
            'isLeaf',
            'jsClassName',
            'validStatus',
            'isValid'
        ];
    },
    buildColumns	: function() {
        return [
            {text : '主键',     dataIndex : 'oid',width:60},
            {text : '资源文本',     dataIndex : 'text',width:200},
            {text : '资源名称',     dataIndex : 'name',width:200},
            {text : '上级名称',     dataIndex : 'parentName',width : 160},
            {text : '菜单url',      dataIndex : 'menuUrl',width:160},
            {text : '菜单类型',      dataIndex : 'menuType',width:160},
            {text : 'js类名',		dataIndex : 'jsClassName',width:160},
            {text : '小图片', 		dataIndex : 'iconCls',width:160},
            {text : '是否是叶子',    	dataIndex : 'isLeaf',width:160},
            {text : '是否有效',		dataIndex : 'isValid',width:160}
        ];
    }


});