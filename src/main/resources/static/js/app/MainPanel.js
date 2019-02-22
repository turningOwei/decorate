/**
 * @author tangL
 * @date 2014-10-29
 */
Ext.define('App.MainPanel',{
	extend  : 'Ext.TabPanel',
	xtype   : 'appmainpanel',
	/**
	 * 添加菜单
	 * 按菜单类别来加载菜单
	 * 目前只需要实现加载extjs组件
	 * 也可以扩展直接加载url
	 * @param data 菜单modelMap数据
	 */
	addMenu : function(data) {
		var menuType = data.menuType,
		    menuUrl  = data.menuUrl,
		    title    = data.text,
		    id 	     = "tabitem_" + data.id,
		    iconCls  = data.iconCls;
		//console.log(data);
		if (Ext.isEmpty(id) || Ext.isEmpty(menuType) || Ext.isEmpty(menuUrl)) {
			var msg = Ext.String.format(
					"id : {0}, menuType : {1}, menuUrl : {2} all of not null", 
					id, 
					menuType, 
					menuUrl);
			
			Ext.Logger.warn(msg);
			return
		}
		var findCmp  = this.getComponent(id);
	
		if (Ext.isEmpty(findCmp)) {  // 如果findCmp为空则加载组件
			if (menuType == 1) { // 代表菜单类型是ext组件
				var jsPath = data.jsPath,
					jsClassName = data.jsClassName;

				if (Ext.isEmpty(jsClassName)) {
					Ext.Logger.error('jsClassName is null');
					return;
				}
				
				var comCfg = {
						id			: id,
						title	  	: title,
						xtype	  	: menuUrl,
						closable    : true,
						iconCls     : iconCls
				};
				/**
				 * 动态加载js
				 */
				/*Ext.require(jsPath, function(){
					this.add(comCfg);
					this.setActiveTab(id);
				}, this);*/
				//Ext.Loader.setPath(jsClassName,jsPath);
				//也可以用Ext.Loader.setPath jspath要写在数据库,维护比不上直接写在loadConfig.js中
				Ext.require(jsClassName, function () {
					this.add(comCfg);
					this.setActiveTab(id);
				},this);
			}
		} else {
			this.setActiveTab(id);
		}
	}
});

