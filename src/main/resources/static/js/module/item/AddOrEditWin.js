Ext.define('Module.item.AddOrEditWin', {
    requires      : ['ExtUx.window.SaveOnCloseWin','Module.item.AddOrEditForm'],
    xtype         : 'itemaddoreditwin',
    extend 		  : 'ExtUx.window.SaveOnCloseWin',
    layout        : 'fit',
    modal         : true,
    items         : {xtype:'itemaddoreditform'}
});