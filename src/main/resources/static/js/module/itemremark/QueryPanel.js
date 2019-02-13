/**
 * @author weip
 * @date 2016-12-17
 */
Ext.define('Module.itemremark.QueryPanel', {
    dataUrl     :  SysConfig.ctx + '/itemRemark/selectAll.do',
    extend 		: 'ExtUx.grid.CusGrid',
    xtype  		: 'itemremarkquerypanel',
    isQueryPage : true,
    plugins     : {ptype: 'cellediting', clicksToEdit: 1},
    rootVisible : false,
    requires        : ['Module.itemremark.AddOrEditWin'],
    initComponent : function() {
        this.callParent();
    },
    buildFields     : function() {
        return [
            'id',
            'itemTypeName',
            'itemName',
            'itemId',
            'name',
            'text',
            'createTime',
            'updateTime',
            'invalid',
            'operateId',
            'memo',
            'orderFlag'
        ];
    },
    buildColumns	: function() {
        return [
            {text : '排序',dataIndex : 'orderFlag',width:50},
            {text : '项目类型名称',dataIndex : 'itemTypeName',width:150,cellWrap:true},
            {text : '项目名称',dataIndex : 'itemName',width:150,cellWrap:true},
            {text : '备注名称',dataIndex : 'name',width:150},
            //{text: '备注',width:600, xtype:'templatecolumn', tpl:'{name}--{text}'},
            {text : '备注文本',dataIndex : 'text',width:400,cellWrap:true}
        ];
    },
    buildTbar       : function(){
        var thiz = this;
        var refrushListeners = {
            click:function(thisCmp, e, eOpts ){
                thiz.store.reload();
            }
        };
        var gridAfterrender = function(thisCmp, eOpts ){
            //数据加载完后选择
            thisCmp.getStore().on('load',function(thisStore, records, successful, eOpts ){
                for(var i = 0;i < records.length;i++){
                    var record = records[i];
                    if(record.get('checked')){
                        thisCmp.getSelectionModel().select(i,false,false) ;
                    }
                }
            });
        };
        this.addButtonId = Ext.id();
        this.editButtonId = Ext.id();
        this.deleteButtonId = Ext.id();
        var addListener = this.buildAddListener();
        var editListeners =this.buildEditListeners();
        var deleteListeners = this.buildDeleteListeners();
        return  [
            {xtype: 'button', text: '刷新', listeners: refrushListeners},
            {itemId: this.addButtonId, xtype: 'button', text: '添加', disabled: false, listeners: addListener},
            {itemId: this.editButtonId, xtype: 'button', text: '修改', disabled: true, listeners: editListeners},
            {itemId: this.deleteButtonId, xtype: 'button', text: '删除', disabled: true, listeners: deleteListeners}
        ];
    },
    listeners : {
        rowclick:function(thisViewTable, record, tr, rowIndex, e, eOpts ){
            Util.getCmp(this.editButtonId).setDisabled(false);
            Util.getCmp(this.deleteButtonId).setDisabled(false);
            //总经理不能修改
           /* if(!(record.get('bizSuperadmin')==2)){
                Util.getCmp(this.roleEdit).setDisabled(false);
            }else{
                Util.getCmp(this.roleEdit).setDisabled(true);
            }*/
        }
    },

    buildAddListener : function () {
        var thiz = this;
        var listener = {
            click: function (thisCmp, e, eOpts) {
                var win = null;
                win = new Module.itemremark.AddOrEditWin({
                    width       :   300,
                    height      :   300,
                    title       : '添加',
                    listeners   : {
                        saveclick   : function(thisCmp,btn){
                            var cfg = {
                                url : SysConfig.ctx + '/itemRemark/update.do',
                                success: function (form, action){
                                    thiz.ownerGrid.getStore().reload();
                                    win.close();
                                }
                            };
                            thisCmp.getComponent(0).submit(cfg);

                           /* Ext.Function.defer(function(){
                                thisCmp.close();
                                thiz.ownerGrid.getStore().reload();
                            }, 500);*/
                        }

                    }
                });

                win.show();
            }
        }
        return listener;
    },
    buildEditListeners:function(){
        var thiz = this;
        var editListeners = {
            click:function(thisCmp, e, eOpts ){
                var params = {
                    id : thiz.ownerGrid.getSp('id')
                };
                var win = new Module.itemremark.AddOrEditWin({
                    width       :   300,
                    height      :   300,
                    title       : '修改',
                    listeners   : {
                        afterrender : function( thisCmp, eOpts ){
                            var cfg = {
                                url : SysConfig.ctx + '/itemRemark/selectRelatedByPrimaryKey.do',
                                params  : params
                            };

                            Ext.Function.defer(function(){
                                thisCmp.getComponent(0).load(cfg);
                            }, 500);
                        },
                        saveclick   : function(thisCmp,btn){
                            var cfg = {
                                url : SysConfig.ctx + '/itemRemark/save.do',
                                success : function(action,form){
                                    thiz.ownerGrid.getStore().reload();
                                }
                            };
                            thisCmp.getComponent(0).submit(cfg);
                        }

                    }
                });

                win.show();
            }
        };
        return editListeners;
    },
    buildDeleteListeners: function () {
        var thiz = this;
        var listener = {
            click: function (thisCmp, e, eOpts) {
                var id = thiz.ownerGrid.getSp('id');
                var successFn = function (response, opti) {
                    thiz.ownerGrid.getStore().reload();
                    Util.getCmp(thiz.deleteButtonId).setDisabled(true);
                }
                var cfg = {
                    url: SysConfig.ctx + '/itemRemark/deleteByPrimaryKey.do?id=' + id,
                    success: successFn
                }
                var deleteFn = function(){
                    ExtUx.Ajax.request(cfg);
                }
                Msg.ynMsg("确认删除?",deleteFn);
            }
        };
        return listener;
    }

});
