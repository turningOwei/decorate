/**
 * @author tangL
 * @date 2014-11-02
 */
Ext.define('ExtUx.tree.TreePanel', {
	extend      : 'Ext.tree.Panel',
	xtype       : 'extuextreepanel',
	rootVisible : false,
	dataUrl     : null,
	checked     : null,
	cascade     : false,
	animate     : false,
    root        : {
		id   : 0,
		text : 'root'
   },
   initComponent  : function() {
   		var treeStore = this.buildTreeStore();
   		Ext.applyIf(this,{
   			store : treeStore
   		});
   		
   		this.on('beforeitemappend', this.onBeforeItemAppendFn, this);
   		this.on('checkchange', this.onCheckedChangeFn, this);
   		this.callParent();
   },
   buildTreeStore : function() {
   		var url = this.dataUrl;
    	return Ext.create('Ext.data.TreeStore',{
			proxy		  : {
   				type		  : 'ajax',
    			url  		  : url,
    			actionMethods  : {
    			        create : 'POST',
    			        read   : 'POST',
    			        update : 'POST',
    			        destroy: 'POST'    
    			 }
			 }
        });
    },
    onBeforeItemAppendFn : function(pNode, aNode, eOptis) {
    	aNode.data.checked = this.checked;
    },
    onCheckedChangeFn : function(node, checked, eOpts) {
    	if (this.cascade) {
			node.cascadeBy(function(n) { 
				n.set('checked', checked);
				n.expand();
			});
			
			(function(n) {	
				if (!n.isRoot()) {
					var callee = arguments.callee;
					var pNode 		= n.parentNode,
						childNodes	= pNode.childNodes;
									
					pNode.hasChildChecked = false;
					Ext.each(childNodes, function(en) {
						if (en.get('checked') == true)
							pNode.hasChildChecked = true;
					});
					
					var c = checked;
					if (pNode.hasChildChecked == true && checked == false)
						c = true;
					pNode.set('checked', c);
					arguments.callee(pNode);
				}	
			}(node));
		}
	},
    getSp			   : function (prop) {
		var sels  = this.getSelection();
		return this.getMdoelsSp(sels, prop);
	},
	getCheckedSp   : function(prop) {
		var sels = this.getChecked();
		return this.getMdoelsSp(sels, prop);
	},
	getMdoelsSp    : function(models, prop) {
		if (Ext.isEmpty(prop)) {
			Ext.Logger.warn('无法获取选择列属性, porp is null');
			return	null;
		}
		
		if (models.length == 0)
			return null;
		
		var arr = [];
		var iterFn = function(o) {
			arr.push(o[prop]);
		};
		
		Ext.Array.each(models, iterFn, this);
		
		return arr.length == 1 ? arr[0] : arr;
	}
});