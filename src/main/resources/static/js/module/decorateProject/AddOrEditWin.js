Ext.define('Module.decorateProject.AddOrEditWin', {
    requires      : ['ExtUx.window.SaveOnCloseWin','Module.decorateProject.AddOrEditForm'],
    xtype         : 'decorateProjectAddOrEditWin',
    extend 		  : 'ExtUx.window.SaveOnCloseWin',
    layout        : 'fit',
    modal         : true,
    items         : {xtype:'decorateProjectAddOrEditForm'}
});