/**
 * @author tangL
 * @date 2014-11-10
 * example:
 *	{
 *		xtype			: 'extuxremotecombobox',
 *		dataUrl			: SysConfig.ctx + 'org/listPage.do',
 *	}
 *
 */
Ext.define('ExtUx.form.combobox.RemoteComboBox', {
	extend		  : 'Ext.form.field.ComboBox',
	xtype		  : 'extuxremotecombobox',
	queryMode	  : 'remote',
	fields	   	  : ['id', 'name'], 
	displayField  : 'name',
	valueField	  : 'id', 
	editable	  : false,
	params		  : null,
	initComponent : function() {
		this.store = this.buildStore();
		this.callParent();
	},
	buildStore	  : function() {
		var fields 		= this.fields,
			url   	 	= this.dataUrl,
			me			= this,
			params      = this.params;		
		
		return Ext.create('Ext.data.Store', {
		     fields         : fields,
		     proxy				: {
		         type			: 'ajax',
		         url			:  url,
	         	 actionMethods  : {
    			        create : 'POST',
    			        read   : 'POST',
    			        update : 'POST',
    			        destroy: 'POST'
    			 },
		         reader			: {
		             type		  : 'json',
		             rootProperty : 'data'
		         }
		     },
		     listeners     : {
		     	'beforeload' : me.onStoreBeforeLoadFn,
		     	scope		 : me
		     }
		});
	},
	onStoreBeforeLoadFn : function(store, operation, eOpts) {
		var params = this.params;
		operation.setParams(params);
	},
	onDestroy    : function() {
		this.fields = null;
		this.params = null;
		this.callParent();
	},
	setParams : function (params) {
		this.params = params;
	}
});