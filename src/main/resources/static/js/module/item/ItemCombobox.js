Ext.define('Module.item.ItemCombobox', {
    extend        : 'ExtUx.form.combobox.RemoteComboBox',
    xtype         : 'itemcombobox',
    fields	   	  : ['name', 'id'],
    displayField  : 'name',
    valueField	  : 'id',
    dataUrl       :  SysConfig.ctx + '/item/selectAllByItemTypeId.do'
});