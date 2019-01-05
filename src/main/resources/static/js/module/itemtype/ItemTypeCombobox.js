Ext.define('Module.itemtype.ItemTypeCombobox', {
    extend        : 'ExtUx.form.combobox.RemoteComboBox',
    xtype         : 'itemtypecombobox',
    fields	   	  : ['name', 'id'],
    displayField  : 'name',
    valueField	  : 'id',
    dataUrl       :  SysConfig.ctx + '/itemType/selectAll.do'
});