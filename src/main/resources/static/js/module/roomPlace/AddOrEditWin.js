Ext.define('Module.roomPlace.AddOrEditWin', {
    requires      : ['ExtUx.window.SaveOnCloseWin','Module.roomPlace.AddOrEditForm'],
    xtype         : 'roomPlaceAddOrEditWin',
    extend 		  : 'ExtUx.window.SaveOnCloseWin',
    layout        : 'fit',
    modal         : true,
    items         : {
        xtype:'roomPlaceAddOrEditForm',
        itemId : 'innerForm'
    }
});