Ext.define('Org', {
     extend: 'Ext.data.Model',
     fields: [
         {name: 'firstName', type: 'string'},
         {name: 'lastName',  type: 'string'},
         {name: 'age',       type: 'int'},
         {name: 'eyeColor',  type: 'string'}
     ]
 });
function loadOrgData () {
	return Ext.create('Ext.data.Store', {
	     model			: 'Org',
	     proxy			: {
	         type		: 'ajax',
	         url		:  SysConfig.ctx + 'org/listPage.do',
	         reader		: {
	             type		  : 'json',
	             rootProperty : 'data'
	         }
	     },
	     autoLoad: true
	});
};
Ext.define('ExtUx.combo.CollegeComboBox', {
    fieldLabel	 : '选择学院',
    extend 		 : 'Ext.form.ComboBox',
    xtype  	     : 'CollegeComboBox',
    store		 : loadOrgData(),
    queryMode	 : 'local',
    displayField : 'name',
    valueField	 : 'abbr'
});