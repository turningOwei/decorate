Ext.define('Module.budgetList.AddOrEditWin', {
    requires      : ['ExtUx.window.SaveOnCloseWin','Module.budgetList.AddOrEditForm'],
    xtype         : 'budgetListAddOrEditWin',
    extend 		  : 'ExtUx.window.SaveOnCloseWin',
    layout        : 'fit',
    modal         : true,
    items         : {
        xtype:'budgetListAddOrEditForm',
        itemId : 'innerForm'
    }
});