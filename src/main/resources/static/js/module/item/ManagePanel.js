Ext.define('Module.item.ManagePanel',{
    extends    : 'Ext.panel.Panel',
    layout      : 'column',
    xtype  		: 'itemmanagepanel',
    requires        : ['Module.item.QueryPanel','Module.itemremark.QueryPanel'],
    initComponent   : function() {
        this.callParent();
        this.items = [this.buildItemPanel(),this.buildItemRemarkPanel()];
    },

    buildItemPanel  : function() {
        return {
            xtype     : 'itemquerypanel',
            columnWidth: 0.3
        };
    },
    buildItemRemarkPanel  : function() {
        return {
            xtype     : 'itemremarkquerypanel',
            columnWidth: 0.7,
            itemId    : 'topPanel'
        };
    }
});