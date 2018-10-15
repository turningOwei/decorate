Ext.define('Module.itemtype.AddOrEditWin', {
    requires      : ['ExtUx.window.SaveOnCloseWin','Module.itemtype.AddOrEditForm'],
    xtype         : 'itemtypeaddoreditwin',
    extend 		  : 'ExtUx.window.SaveOnCloseWin',
    layout        : 'fit',
    modal         : true,
    items         : {xtype:'itemtypeaddoreditform'}
});