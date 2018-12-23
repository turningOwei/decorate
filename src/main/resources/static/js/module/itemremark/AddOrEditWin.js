Ext.define('Module.itemremark.AddOrEditWin', {
    requires      : ['ExtUx.window.SaveOnCloseWin','Module.itemremark.AddOrEditForm'],
    xtype         : 'itemremarkaddoreditwin',
    extend 		  : 'ExtUx.window.SaveOnCloseWin',
    layout        : 'fit',
    modal         : true,
    items         : {xtype:'itemremarkaddoreditform'}
});