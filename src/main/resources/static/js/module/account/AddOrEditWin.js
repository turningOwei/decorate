Ext.define('Module.account.AddOrEditWin', {
    requires      : ['ExtUx.window.SaveOnCloseWin','Module.account.AddOrEditForm'],
    xtype         : 'accountaddoreditwin',
    extend 		  : 'ExtUx.window.SaveOnCloseWin',
    layout        : 'fit',
    modal         : true,
    items         : {xtype:'accountaddoreditform'}
});