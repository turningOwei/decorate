Ext.define('Sos.jni.view.main.RuleDayAreaPanel', {
	extend: 'Ext.grid.Panel',
	xtype : 'ruleDayAreaPanel',

	requires: [
		'Sos.jni.store.RuleDayAreaStore'
	],
	initComponent : function() {
		this.saveBtnId = Ext.id;
		this.callParent();
	},
	title: '时间区间控制',
	store  : {
		type: 'ruleDayAreaStore'
	},
	plugins: {
		ptype       : 'cellediting',
		clicksToEdit: 2,
		listeners   : {
			'edit': function (editor, e) {
				var field = e.field,
				    record= e.record,
				    dateStr = record.get(field),
				    startDate = new Ext.form.field.Date({
					    format: 'Y.m.d'
				    }),
				    endDate = new Ext.form.field.Date({
					    format: 'Y.m.d'
				    }),
					yearStr = Ext.Date.format(new Date(), 'Y');

				if(field == 'startDay' || field == 'endDay'){
					var date = new Ext.form.field.Date({
						format: 'm.d'
					});
					date.setValue(dateStr);
					record.set(field,date.getRawValue());
				}

				if(field == 'startDay'){
					var endDateStr = record.get('endDay'),
					    endDateStr = Ext.String.format('{0}.{1}',yearStr,endDateStr);
					startDate.setValue(dateStr);
					endDate.setValue(endDateStr);
				}

				if(field == 'endDay'){
					var startDayStr = record.get('startDay'),
					    startDayStr = Ext.String.format('{0}.{1}',yearStr,startDayStr);
					startDate.setValue(startDayStr);
					endDate.setValue(dateStr);
				}

				if(field == 'startDay' || field == 'endDay'){
					if(startDate.getValue().getTime() > endDate.getValue().getTime()){
						record.set(field,record.getModified(field));
					}
				}
			}
		}
	},
	tbar   : [
		{xtype: 'button', text: '刷新',listeners: {
			'click': function(thiz,e,eOpts){
				var thisPanel = thiz.ownerCt.ownerCt;
				thisPanel.getStore().reload();
			},
			scope : this
		}},
		{xtype: 'button', text: '添加',
			listeners: {
				'click': function(thiz,e,eOpts){
					var thisPanel = thiz.ownerCt.ownerCt;
					thisPanel.getStore().add({});
				}
			}
		},
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
					var params = {
						updateStr  : Ext.encode(updateRecords),
						newStr      : Ext.encode(newRecords),
					};
					if(updateRecords.length == 0 && newRecords == 0){
						var mb = Ext.MessageBox.alert('警告','未进行编辑或者添加操作!');
						return mb;
					}
					Ext.Ajax.request({
						url     : contextPath+'/vdpgRlDayArea/saveModifed',
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
				},
				scope : this
			}
		},
	],
	columns: [
		{text: '开始时间', dataIndex: 'startDay', width: 200,
			editor      : {
				xtype     : 'datefield',
				format    : 'm.d',
				allowBlank: false
			}
		},
		{text: '结束时间', dataIndex: 'endDay',   width: 200,
			editor      : {
				xtype     : 'datefield',
				format    : 'm.d',
				allowBlank: false
			}
		},
		{text: '描述', dataIndex: 'description',},
		{text: '备注', dataIndex: 'memo',},
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
	}
});