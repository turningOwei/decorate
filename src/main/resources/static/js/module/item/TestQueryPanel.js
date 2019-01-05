/**
 * @author weip
 * @date 2016-12-17
 */
Ext.define('Module.item.TestQueryPanel', {
    extend 		: 'Ext.panel.Panel',
    xtype  		: 'testquerypanel',
    requires        : ['Module.item.QueryPanel','Module.itemremark.QueryPanel'],
    layout      : 'column',
    initComponent : function() {
        this.items = [this.buildItemPanel(),this.buildItemRemarkPanel()];
        this.callParent();
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
