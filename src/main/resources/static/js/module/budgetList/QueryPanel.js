/**
 * @author weip
 * @date 2016-12-17
 */
Ext.define('Module.budgetList.QueryPanel', {
    dataUrl     :  SysConfig.ctx + '/budgetList/selectAll.do',
    extend 		: 'ExtUx.grid.CusGrid',
    buttonDisabled : true,
    xtype  		: 'budgetListQueryPanel',
    isQueryPage : false,
    plugins     : {ptype: 'cellediting', clicksToEdit: 1},
    rootVisible : false,
    requires        : ['Module.budgetList.AddOrEditWin'],
    editFormParamObj : {
        decorateProjectId : '',
        roomPlaceId : ''
    },
    initComponent : function() {
        this.callParent();
    },
    buildFields     : function() {
        return [
            'orderFlag',
            'id',
            'roomPlaceId',
            'itemId',
            'itemName',
            'itemUnit',
            'itemUnitPrice',
            'quantity',
            'itemTotalPrice',
            'discountItemUnitPrice',
            'discountItemTotalPrice'
        ];
    },
    buildColumns	: function() {
        return [
            {text : '排序',dataIndex : 'orderFlag',width:50},
            {text : '项目名称',dataIndex : 'itemName',width:150,cellWrap:true},
            {text : '单位',dataIndex : 'itemUnit',width:100,cellWrap:true},
            {text : '单价',dataIndex : 'itemUnitPrice',width:100,cellWrap:true},
            {text : '数量',dataIndex : 'quantity',width:100,cellWrap:true},
            {text : '合计',dataIndex : 'itemTotalPrice',width:100,cellWrap:true},
            {text : '折扣单价',dataIndex : 'discountItemUnitPrice',width:100,cellWrap:true},
            {text : '折扣后合计',dataIndex : 'discountItemTotalPrice',width:100,cellWrap:true},
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
        this.refrushButtonId = Ext.id();
        var addListener = this.buildAddListener();
        var editListeners =this.buildEditListeners();
        var deleteListeners = this.buildDeleteListeners();
        return  [
            {itemId: this.refrushButtonId,xtype: 'button', text: '刷新', disabled: thiz.buttonDisabled,listeners: refrushListeners},
            {itemId: this.addButtonId, xtype: 'button', text: '添加', disabled: thiz.buttonDisabled,listeners: addListener},
            {itemId: this.editButtonId, xtype: 'button', text: '修改', disabled: thiz.buttonDisabled, listeners: editListeners},
            {itemId: this.deleteButtonId, xtype: 'button', text: '删除', disabled: thiz.buttonDisabled, listeners: deleteListeners}
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
                win = new Module.budgetList.AddOrEditWin({
                    width       :   300,
                    height      :   400,
                    title       : '添加',
                    listeners   : {
                        saveclick   : function(thisCmp,btn){
                            var cfg = {
                                url : SysConfig.ctx + '/budgetList/save.do',
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
                var param = {roomPlaceId:thiz.editFormParamObj.roomPlaceId};
                var innerForm = win.getComponent('innerForm').getForm();
                innerForm.setValues(param);
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
                var win = new Module.budgetList.AddOrEditWin({
                    width       :   300,
                    height      :   400,
                    title       : '修改',
                    listeners   : {
                        afterrender : function( thisCmp, eOpts ){
                            var cfg = {
                                url : SysConfig.ctx + '/budgetList/selectByPrimaryKeyWithItem.do',
                                params  : params
                            };

                            Ext.Function.defer(function(){
                                thisCmp.getComponent(0).load(cfg);
                            }, 500);
                        },
                        saveclick   : function(thisCmp,btn){
                            var cfg = {
                                url : SysConfig.ctx + '/budgetList/update.do',
                                success : function(action,form){
                                    thiz.ownerGrid.getStore().reload();
                                }
                            };
                            thisCmp.getComponent(0).submit(cfg);
                        }

                    }
                });
                //roomPlaceId从当前panel获取
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
                    url: SysConfig.ctx + '/budgetList/deleteByPrimaryKey.do?id=' + id,
                    success: successFn
                }
                var deleteFn = function(){
                    ExtUx.Ajax.request(cfg);
                }
                Msg.ynMsg("确认删除?",deleteFn);
            }
        };
        return listener;
    },
    setEditFormParamObj:function(roomPlaceId){
        this.editFormParamObj.roomPlaceId = roomPlaceId;
    },
    setButtonAble : function(roomPlaceId){
        this.setEditFormParamObj(roomPlaceId);
        Util.getCmp(this.addButtonId).setDisabled(false);
        Util.getCmp(this.refrushButtonId).setDisabled(false);
        Util.getCmp(this.editButtonId).setDisabled(true);
        Util.getCmp(this.deleteButtonId).setDisabled(true);
    },
    reset : function () {
        Util.getCmp(this.addButtonId).setDisabled(true);
        Util.getCmp(this.refrushButtonId).setDisabled(true);
        Util.getCmp(this.editButtonId).setDisabled(true);
        Util.getCmp(this.deleteButtonId).setDisabled(true);
        this.getStore().loadData([],false);
    }

});
