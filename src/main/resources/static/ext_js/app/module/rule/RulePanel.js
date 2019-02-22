Ext.define('Sos.jni.module.rule.RulePanel', {
	extend: 'Ext.grid.Panel',
	xtype : 'rulePanel',
	requires: [
		'Sos.jni.module.rule.RuleStore'
	],
	initComponent : function() {
		this.callParent();
	},
	title: '矫正规则',

	store  : {
		type: 'ruleStore'
	},
	//thiz,e,eOpts
	addRuleCfg : function(thiz,e,eOpts){
	},
	tbar   : [
		{xtype: 'button', text: '刷新',
			listeners:{
				'click' : function(thiz,e,eOpts){
					var thisPanel = thiz.ownerCt.ownerCt;
					thisPanel.getStore().reload();
				}
			}
		},
		{xtype: 'button', text: '添加',
			listeners: {
				'click': function(thiz,e,eOpts){
					var thisPanel = thiz.ownerCt.ownerCt;
					thisPanel.getStore().add({});
				}
			}},
		{xtype: 'button', text: '保存',listeners:{
			click : function(thiz,e,eOpts){
				var cmp = thiz.ownerCt.ownerCt;
				var updateModels = cmp.getStore().getUpdatedRecords();
				var newModels = cmp.getStore().getNewRecords();
				var updateRecords= [];
				var newRecords = [];
				for(var model in updateModels){
					var rec = updateModels[model].getData();
					updateRecords.push(rec);
				}
				for(var model in newModels){
					var rec = newModels[model].getData();
					rec.id = null;
					newRecords.push(rec);
				}
				if(updateRecords.length == 0 && newRecords == 0){
					var mb = Ext.MessageBox.alert('警告','未进行编辑或者添加操作!');
					return mb;
				}
				var params = {
					updateStr  : Ext.encode(updateRecords),
					newStr      : Ext.encode(newRecords),
				};
				Ext.Ajax.request({
					url     : contextPath+'/vdpgRlRule/saveModifed',
					params  : params,
					success : function(response, opts) {
						Ext.MessageBox.alert('信息','保存成功!');
						cmp.getStore().reload();
					},

					failure: function(response, opts) {
						Ext.MessageBox.alert('信息','保存失败!');
						console.log('server-side failure with status code ' + response.status);
					}
				});
			}
		}},
		{
			xtype: 'button', text: '添加到配置',
			listeners:{
				click : function(thiz,e,eOpts){
					var cmp = thiz.ownerCt.ownerCt;
					cmp.addRuleCfg(thiz,e,eOpts);
				}
			}
		}
	],
	columns: [
		{text: '规则名称', dataIndex: 'ruleName', width: 200,
			editor      : {
				xtype     : 'textfield'
			}
		},
		{text: '规则描述', dataIndex: 'ruleDesc',   width: 260,
			editor      : {
				xtype     : 'textfield'
			}
		},
		{text: '备注',dataIndex: 'memo',editor : {xtype : 'textfield'}},
		{text: '创建时间', dataIndex: 'createDate',xtype:'datecolumn',format:'Y-m-d H:i:s',width:150},
		{text: '更新时间', dataIndex: 'updateDate',xtype:'datecolumn',format:'Y-m-d H:i:s',width:150}
	],

	listeners: {
		select     : 'onItemSelected',
		/*rowclick : function( thiz , record , tr , rowIndex , e , eOpts){
		 console.log(this.getStore());
		 },*/
		afterlayout: function (thiz, layout, eOpts) {
			//console.log(this.getStore());
		}
	},
	plugins: {
		ptype       : 'cellediting',
		clicksToEdit: 2,
	}
});