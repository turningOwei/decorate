Ext.define('Module.roomPlace.RoomPlaceCombobox', {
    extend        : 'ExtUx.form.combobox.RemoteComboBox',
    xtype         : 'roomPlaceCombobox',
    fields	   	  : ['roomPlaceName', 'id'],
    displayField  : 'roomPlaceName',
    valueField	  : 'id',
    dataUrl       :  SysConfig.ctx + '/roomPlace/selectAll.do'
});