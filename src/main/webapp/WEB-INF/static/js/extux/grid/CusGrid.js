/**
 * 简单封装了grid组件
 * @author tangL
 * @date 2014-10-31
 */
Ext.define('ExtUx.grid.CusGrid', {
		dataUrl          :  null,
		extend 		     : 'Ext.grid.Panel',
		pageSize         : SysConfig.pageSize,
		isQueryPage      : true, // 是否分页查询
		isAutoLoad       : true, // 是否自动加载
		getDefaultParams : Ext.emptyFn, // 获取参数 由loadByDefaultParams调用获取
		initComponent    : function() {
			var store       = this.buildStore(),
				columns  	= this.buildColumns(),
				tbar 	 	= this.buildTbar(),
				dockedItems = this.buildDockedItems();
			//使用applyIf 不能加载tbar
			Ext.apply(this, {
				store       : store,
				tbar		: tbar,
				dockedItems : dockedItems,
				columns  	: [{xtype: 'rownumberer',width:30}].concat(columns)
			});

			if (this.isQueryPage == true) {
				/**
			 	 * 初始化分页工具条需要store
			 	 */
				this.bbar = this.buildBbar();
			}
			
			this.on('destroy', this.onCusGridDestoryFn);
			
			this.callParent();
		},
		fileds           : null,
		buildFields      : Ext.emptyFn,
		buildDockedItems : Ext.emptyFn,
		buildTbar    	 : Ext.emptyFn,
		
		buildStoreCfg    : function () {
			var dataUrl  = this.dataUrl,
				pageSize = this.pageSize,
				autoLoad = this.isAutoLoad,
				isPage   = this.isQueryPage,
				fields   = this.fields || this.buildFields();

			if (autoLoad && isPage) {
				autoLoad = {start  : 0, limit  : this.pageSize, isPage: isPage};
			}
			
			return {
				pageSize      : pageSize,
				fields 		  : fields,
				autoLoad	  : autoLoad,
				proxy		  : {
       				type		   : 'ajax',
        			url			   : dataUrl,
        			extraParams	   : {isPage:isPage},
        			actionMethods  : {
        			        create : 'POST',
        			        read   : 'POST',
        			        update : 'POST',
        			        destroy: 'POST'    
        			},
        			reader		  : {
            			type		    : 'json',
           				rootProperty    : 'data',
            			totalProperty   : 'totalCount',
            			successProperty : 'success',
            			messageProperty : 'msg'
            		}
    			 }
			};
		},
		buildStore		: function () {
			var cfg = this.buildStoreCfg();
			return new Ext.data.JsonStore(cfg);// Ext.create('', );
		},
		buildBbar        : function() {
			return {
				xtype       : 'pagingtoolbar',
				store       : this.store,
				displayInfo : true
			};
		},
		buildColumns 	 : Ext.emptyFn,
		/**
		 *  覆盖store.load 默认 把分页参数传入
		 * @params 查询参数
		 * @loadParams 加载参数
		 *   对象构成:
		 *     1.callBack Function 查询回调
		 *     2.scope Object 作用域 默认的是 store
		 *     3.add Boolean 是否追加当前纪录， 而不是取代当前缓存(暂不使用)
		 * @return Boolean
		 *     如果开发监听了beforeload事件并返回false, 该方法将被中断并返回false 其他时候返回true
		 */
		load    		 : function (params, loadParams) {
			var	_params 	   = params || {},
				_loadParams    = loadParams || {},
				callBack   	   = _loadParams.callBack || Ext.emptyFn,
				scope      	   = _loadParams.scope || this,
				isPage		   = this.isQueryPage,
				store		   = this.getStore(),
				proxy		   = store.getProxy();
			    
			Ext.apply(_params, {
				isPage   : isPage
			});
			proxy.extraParams = _params;
			store.currentPage = 1;
			
			if(this.store) {
				return this.getStore().load({
					callback : callBack,
					scope	 : scope,
					start	 : 0				
				});
			}
		},
		/**
		 * 按默认参数查找
		 * @params 查询参数
		 * @loadParams 加载参数 @see load
		 * @return Boolean
		 */
		loadByDefaultParams       : function (params, loadParams) {
		//	if(this.validFields() == true) {
				var defParams   = this.getDefaultParams() || {},
					_params      = params || {},
					lastParams  = Ext.apply(defParams, _params);

				return this.load(lastParams, loadParams);
		//	}
		},
		loadData : function (data, append) {
			var store = this.getStore();
			if(store)
				store.loadData(data, append);
		},
		/**
		 * 获取选择列的属性
		 * @param prop 要获取的属性
		 * 如果选择了一列则返回单个字段值, 如果选择了多列则返回数组
		 */
		getSp			   : function (prop) {
			if (Ext.isEmpty(prop)) {
				Ext.Logger.warn('无法获取选择列属性, porp is null');
				return	null;
			}
			
			var sels  = this.getSelection();
			if (sels.length == 0)
				return null;
			
			var arr = [];
			var iterFn = function(o) {
				arr.push(o.get(prop));
			};
			
			Ext.Array.each(sels, iterFn, this);
			return arr.length == 1 ? arr[0] : arr;
		},
	/***/
	getMidifiedData             : function(){

		var arr = [],
            sels  = this.getStore().getModifiedRecords(),
			iterFn= function (o) {
				arr.push(o.getData());
            };
        /*for(var i = 0;i < sels.length;i++){
            arr.push(sels[i].getData());
		}*/
        Ext.Array.each(sels, iterFn, this);
		return arr;
	},
		onCusGridDestoryFn : function (component, eOpts) {
			component.fields = null;
		}
});