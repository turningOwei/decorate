Ext.define('Module.permission.role.RoleLocalCombobox', {
    extend: 'ExtUx.form.combobox.RemoteComboBox',
    xtype: 'roleremotecombobox',
    fields	   	  : ['oid', 'name'],
    displayField  : 'name',
    valueField	  : 'oid',
    dataUrl :  SysConfig.ctx + '/permission/deptrole/listNotGeneralManagerByDept.do'
});


