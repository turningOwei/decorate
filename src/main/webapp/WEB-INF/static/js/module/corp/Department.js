Ext.define('Module.corp.Department', {
    extend        : 'ExtUx.form.combobox.RemoteComboBox',
    xtype         : 'corpdeptcombobox',
    fields	   	  : ['name', 'oid'],
    displayField  : 'name',
    valueField	  : 'oid',
    dataUrl       :  SysConfig.ctx + '/corp/department/listAll.do'
});