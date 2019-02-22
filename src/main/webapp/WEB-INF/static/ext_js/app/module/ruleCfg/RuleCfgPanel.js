Ext.define('Sos.jni.module.ruleCfg.RuleCfgPanel', {
	extend: 'Ext.grid.Panel',
	xtype : 'ruleCfgPanel',

	requires: [
		'Sos.jni.module.ruleCfg.RuleCfgStore'
	],

	title: '矫正规则配置',

	store  : {
		type: 'ruleCfgStore'
	},
	plugins: {
		ptype       : 'cellediting',
		clicksToEdit: 2,
		listeners   : {
			'edit': function (editor, context, eOpts) {
				//Ext.getCmp('saveBtnId').setDisabled(false);
			}
		}
	},
	tbar   : [
		{xtype: 'button', text: '刷新',listeners:{
			'click': function(thiz,e,eOpts){
				thiz.ownerCt.ownerCt.getStore().reload();
			}
		}},
		{xtype: 'button',text:'添加规则',listeners: {
			'click': function(thiz,e,eOpts){
				var ruleCfgPanel = thiz.ownerCt.ownerCt;
				//ruleCfgPanel.getStore().insert(0,{});
				var win = null;
				win =  Ext.create('Ext.window.Window', {
					height: 500,
					width: 700,
					layout: 'fit',
					modal :true,
					items: {
						xtype       :  'rulePanel',
						addRuleCfg  : function(thiz,e,eOpts){
							var cmp = thiz.ownerCt.ownerCt;
							var selectModels = cmp.getSelection();
							if(selectModels.length==0){
								return Ext.MessageBox.alert('警告','未选择要添加的数据行!');
							}
							var ruleId = selectModels[0].get('id');
							win.close();
							ruleCfgPanel.getStore().insert(0,{
								ruleId : ruleId,
								name   : '新增配置名称'
							});
						},
					},
					listeners : {
						afterrender : function( thiz , eOpts ){
							var cmp = thiz.items.items[0];
							//cmp.getDockedItems('toolbar[dock="top"]')[0].items.items[1].setDisabled(true);
							//cmp.getStore().load(params);
							cmp.getStore().reload();
						},
						close :function(panel , eOpts ){
							//thiz.ownerCt.ownerCt.getStore().reload();
						}
					}
				}).show();
			}
		}},
		{
			xtype: 'button', text: '保存',
			listeners: {
				'click': function(thiz,e,eOpts){
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
						url     : contextPath+'/vdpgRlCfg/saveModifed',
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
			}
		}, {
			xtype: 'button', text: '日时段详细规则',
			listeners: {
				'click': function(thiz,e,eOpts){
					var cmp = this.ownerCt.ownerCt;
					var selectModel = cmp.getSelection();
					if(selectModel.length == 0){
						var mb = Ext.MessageBox.alert('警告','未选择规则!');
						return mb;
					}
					var ruleId = selectModel[0].get('id'),
						name      = selectModel[0].get('name'),
						rlDayarea = selectModel[0].get('rlDayarea'),
					    startDay  = rlDayarea?rlDayarea.startDay:null,
					    endDay    = rlDayarea?rlDayarea.endDay:null,
					    title     = Ext.String.format('{0} {1}-{2}',name,startDay,endDay);

					var win =  Ext.create('Ext.window.Window', {
						height: 500,
						width: 700,
						layout: 'fit',
						modal :true,
						items: {  // Let's put an empty grid in just to illustrate fit layout
							xtype   :   'timeIntvlPanel',
							title   : title
						},
						listeners : {
							afterrender : function( thiz , eOpts ){
								var cmp = thiz.items.items[0];
								var params = {
									params : {
										ruleId : ruleId
									}
								}
								cmp.ruleId = ruleId;
								cmp.getStore().load(params);
							}
						}
					}).show();
				}
			}
		},{
			xtype: 'button', text: '时间区间修改',
			listeners: {
				'click': function(thiz,e,eOpts){
					var win = null;
					var cmp = this.ownerCt.ownerCt;
					var selectModel = cmp.getSelection();
					if(selectModel.length == 0){
						var mb = Ext.MessageBox.alert('警告','未选择规则!');
						return mb;
					}

					var ruleId = selectModel[0].get('id'),
					    name      = selectModel[0].get('name'),
					    rlDayarea = selectModel[0].get('rlDayarea'),
					    startDay  = rlDayarea?rlDayarea.startDay:null,
					    endDay    = rlDayarea?rlDayarea.endDay:null,
					    rlDayAreaId= rlDayarea?rlDayarea.id:null,
					    title     = Ext.String.format('{0} {1}-{2}',name,startDay,endDay);

					win =  Ext.create('Ext.window.Window', {
						height: 500,
						width: 700,
						layout: 'fit',
						modal :true,
						items: {
							xtype   :  'ruleDayAreaPanel',
							title   : title
						},
						listeners : {
							afterrender : function( thiz , eOpts ){
								var cmp = thiz.items.items[0];
								var params = {
									params : {
										id : rlDayAreaId
									}
								}
								//cmp.getDockedItems('toolbar[dock="top"]')[0].items.items[1].setDisabled(true);
								cmp.getStore().load(params);
							},
							close :function(panel , eOpts ){
								thiz.ownerCt.ownerCt.getStore().reload();
							}
						}
					}).show();
				}
			}
		}
	],
	columns: [
		//{text: '', 			dataIndex: 'id',			},
		{text: '名称', dataIndex: 'name', width: 200,
			editor :{xtype:'textfield'}
		},
		//{text: '', 			dataIndex: 'ruleId',		},
		//{text: '', 			dataIndex: 'dayAreaId',		},
		{
			text    : '规则名称', dataIndex: 'rlRule',
			renderer: function (value, record) {
				if (value.ruleName) {
					return value.ruleName;
				} else {
					return '';
				}
			}
		},
		{
			text    : '开始时间', dataIndex: 'rlDayarea',
			renderer: function (value, record) {
				if (value.startDay) {
					return value.startDay;
				} else {
					return '';
				}
			}
		},
		{
			text    : '结束时间', dataIndex: 'rlDayarea',
			renderer: function (value, record) {
				if (value.endDay) {
					return value.endDay;
				} else {
					return '';
				}
			}
		},
		{
			text        : '优先级', dataIndex: 'priority', width: 70,
			editor      : {
				xtype     : 'numberfield',
				minValue  : 0
			}
		},
		{
			text    : '规则说明', dataIndex: 'rlRule', width: 300,
			renderer: function (value, record) {
				if (value.ruleDesc) {
					return value.ruleDesc;
				} else {
					return '';
				}
			}
		},
		{text: '描述', dataIndex: 'description',editor :{xtype:'textfield'}},
		{text: '备注', dataIndex: 'memo',editor :{xtype:'textfield'}},
		{text: '创建时间', dataIndex: 'createDate',},
		{text: '更新时间', dataIndex: 'updateDate',}
	],

	listeners: {
		select     : 'onItemSelected',
		/*rowclick : function( thiz , record , tr , rowIndex , e , eOpts){
		 console.log(this.getStore());
		 },*/
		afterlayout: function (thiz, layout, eOpts) {
			//console.log(this.getStore());
		}
	}
});