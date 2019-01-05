/**
 * @author weip
 * @date 2016-12-17
 */
Ext.define('Module.account.TestPanel', {
    //dataUrl     :  SysConfig.ctx + '/account/listByPage.do',
    extend 		: 'Ext.grid.GridPanel',
    xtype  		: 'testpanel',
    isQueryPage : true,
    plugins: {ptype: 'cellediting', clicksToEdit: 1},
    rootVisible : false,
    bbar    : [{xtype       : 'pagingtoolbar', text: 'Button 1'}],
    initComponent : function() {
        /*this.on('itemclick', function(view, record, item, index, e, eOpts) {
         this.fireEvent('nodeClick', this, view, record);
         });*/
        this.callParent();
    },
    columns: [
    {text : '姓名',     dataIndex : 'name'},
    {text : '联系电话', dataIndex : 'mobilePhone'},
    {text : '邮件地址', dataIndex : 'email'},
    {text : '所属业务', dataIndex : 'bizModuleKey'}
    ],
    fields:['name']

});
