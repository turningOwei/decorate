/**
 * @author weip
 * @date 2016-12-17
 */
Ext.define('Module.roomPlace.QueryPanel', {
    dataUrl: SysConfig.ctx + '/roomPlace/selectAll.do',
    extend: 'ExtUx.grid.CusGrid',
    buttonDisabled: true,
    xtype: 'roomPlaceQueryPanel',
    isQueryPage: false,
    plugins: {ptype: 'cellediting', clicksToEdit: 1},
    rootVisible: false,
    requires: ['Module.roomPlace.AddOrEditWin'],
    editFormParamObj: {
        projectId: ''
    },
    initComponent: function () {
        this.callParent();
    },
    buildFields: function () {
        return [
            'id',
            'projectId',
            'roomPlaceName',
            'orderFlag'
        ];
    },
    buildColumns: function () {
        return [
            {text: '排序', dataIndex: 'orderFlag', width: 50},
            {text: '房间位置名称', dataIndex: 'roomPlaceName', width: 150, cellWrap: true}
        ];
    },
    buildTbar: function () {
        var thiz = this;
        var refrushListeners = {
            click: function (thisCmp, e, eOpts) {
                thiz.store.reload();
            }
        };
        var gridAfterrender = function (thisCmp, eOpts) {
            //数据加载完后选择
            thisCmp.getStore().on('load', function (thisStore, records, successful, eOpts) {
                for (var i = 0; i < records.length; i++) {
                    var record = records[i];
                    if (record.get('checked')) {
                        thisCmp.getSelectionModel().select(i, false, false);
                    }
                }
            });
        };
        this.refrushButtonId = Ext.id();
        this.addButtonId = Ext.id();
        this.editButtonId = Ext.id();
        this.deleteButtonId = Ext.id();
        var addListener = this.buildAddListener();
        var editListeners = this.buildEditListeners();
        var deleteListeners = this.buildDeleteListeners();
        return [
            {xtype: 'button', text: '刷新', listeners: refrushListeners,disabled: thiz.buttonDisabled,itemId: this.refrushButtonId},
            {
                itemId: this.addButtonId,
                xtype: 'button',
                text: '添加',
                disabled: thiz.buttonDisabled,
                listeners: addListener
            },
            {
                itemId: this.editButtonId,
                xtype: 'button',
                text: '修改',
                disabled: thiz.buttonDisabled,
                listeners: editListeners
            },
            {
                itemId: this.deleteButtonId,
                xtype: 'button',
                text: '删除',
                disabled: thiz.buttonDisabled,
                listeners: deleteListeners
            }
        ];
    },
    listeners: {
        rowclick: function (thisViewTable, record, tr, rowIndex, e, eOpts) {
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

    buildAddListener: function () {
        var thiz = this;
        var listener = {
            click: function (thisCmp, e, eOpts) {
                var win = null;
                win = new Module.roomPlace.AddOrEditWin({
                    width: 300,
                    height: 300,
                    title: '添加',
                    listeners: {
                        saveclick: function (thisCmp, btn) {
                            var cfg = {
                                url: SysConfig.ctx + '/roomPlace/update.do',
                                success: function (form, action) {
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
               /* var innerForm = win.getComponent('innerForm'),
                    formData = innerForm.getData();
                console.log(thiz.editFormParamObj);
                console.log(thiz.editFormParamObj.projectId);
                console.log(innerForm.form);
                //formData.projectId = thiz.editFormParamObj['projectId'];
                //innerForm.setData(formData);
                win.show();
                console.log(formData);*/
                var param = {projectId:thiz.editFormParamObj.projectId};
                var innerForm = win.getComponent('innerForm').getForm();
                innerForm.setValues(param);
                win.show();
            }
        }
        return listener;
    },
    buildEditListeners: function () {
        var thiz = this;
        var editListeners = {
            click: function (thisCmp, e, eOpts) {
                var params = {
                    id: thiz.ownerGrid.getSp('id')
                };
                var win = new Module.roomPlace.AddOrEditWin({
                    width: 300,
                    height: 300,
                    title: '修改',
                    listeners: {
                        afterrender: function (thisCmp, eOpts) {
                            var cfg = {
                                url: SysConfig.ctx + '/roomPlace/selectByPrimaryKey.do',
                                params: params
                            };

                            Ext.Function.defer(function () {
                                thisCmp.getComponent(0).load(cfg);
                            }, 500);
                        },
                        saveclick: function (thisCmp, btn) {
                            var cfg = {
                                url: SysConfig.ctx + '/roomPlace/save.do',
                                success: function (action, form) {
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
                    url: SysConfig.ctx + '/roomPlace/deleteByPrimaryKey.do?id=' + id,
                    success: successFn
                }
                var deleteFn = function () {
                    ExtUx.Ajax.request(cfg);
                }
                Msg.ynMsg("确认删除?", deleteFn);
            }
        };
        return listener;
    },
    setEditFormParamObj: function (projectId) {
        this.editFormParamObj.projectId = projectId;
    },
    setButtonAble : function(projectId){
        this.setEditFormParamObj(projectId);
        Util.getCmp(this.addButtonId).setDisabled(false);
        Util.getCmp(this.refrushButtonId).setDisabled(false);
    }

});
