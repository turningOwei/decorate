/**
 * @author tangL
 * @date 2014-11-10
 * example:
 *	{
 *		fieldLabel : 'XX',
 *		xtype	   : 'extuxlocalcombobox',
 *		cData	   : [{id:1, name:'ext组件'}, {id:2, name:'url'}],
 *		name       : 'XX'
 *	}
 *
 */
Ext.define('ExtUx.form.combobox.LocalComboBox', {
	extend		  : 'Ext.form.field.ComboBox',
	xtype		  : 'extuxlocalcombobox',
	queryMode	  : 'local',
	fields	   	  : ['id', 'name'], 
	cData		  : null,
	displayField  : 'name',
	valueField	  : 'id', 
	editable	  : false,
	initComponent : function() {
		this.store = this.buildStore();
		this.callParent();
	},
	buildStore	  : function() {
		var fields = this.fields,
			cData  = this.cData;

		return Ext.create('Ext.data.Store', {
		    fields	: fields,
		    data 	: cData
		});
	},
	onDestroy    : function() {
		this.fields = null;
		this.cData  = null;
		this.callParent();
	}
});