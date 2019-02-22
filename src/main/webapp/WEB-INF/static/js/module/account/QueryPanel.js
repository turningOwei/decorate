/**
 * @author weip
 * @date 2016-12-17
 */
Ext.define('Module.account.QueryPanel', {
    dataUrl     :  SysConfig.ctx + '/account/listByPage.do',
    extend 		: 'ExtUx.grid.CusGrid',
    xtype  		: 'accountgquerypanel',
    isQueryPage : true,
    plugins     : {ptype: 'cellediting', clicksToEdit: 1},
    rootVisible : false,
    requires        : ['Module.account.AddOrEditWin','Module.permission.role.QueryPanel'],
    initComponent : function() {
        this.callParent();
    },
    buildFields     : function() {
        return [
            'oid',
            'corpId',
            'deptId',
            'pwd',
            'departmentName',
            'name',
            'mobilePhone',
            'email',
            'deptRoleId',
            'roleAliasName',
            'roleName'
        ];
    },
    buildColumns	: function() {
        return [
            {text : '部门',     dataIndex : 'departmentName',width:200},
            {text : '姓名',     dataIndex : 'name',width:200},
            {text : '联系电话', dataIndex : 'mobilePhone',width : 160},
            {text : '邮件地址', dataIndex : 'email',width:160},
            {text : '所属业务', dataIndex : 'bizModuleKey',width:160},
            {text : '角色名称', dataIndex : 'roleName',width:160},
            {text : '权限别名(员工职称)', dataIndex : 'roleName',width:160}
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
        var thiz = this;
        var accountEditListeners = {
            click:function(thisCmp, e, eOpts ){
                var params = {
                    oid : thiz.ownerGrid.getSp('oid'),
                    corpId : thiz.ownerGrid.getSp('corpId')
                };
                var win = new Module.account.AddOrEditWin({
                    width       :   300,
                    height      :   300,
                    title       : '账户修改',
                    listeners   : {
                        afterrender : function( thisCmp, eOpts ){
                            var cfg = {
                                url : SysConfig.ctx + '/account/queryAccountById.do',
                                params  : params
                            };

                            Ext.Function.defer(function(){
                                thisCmp.getComponent(0).load(cfg);
                            }, 500);
                        },
                        saveclick   : function(thisCmp,btn){
                            var cfg = {
                                url : SysConfig.ctx + '/account/saveAccount.do',
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
        this.accountAdd = Ext.id();
        this.accountEdit = Ext.id();
        this.roleEdit  = Ext.id();
        var accountAddListener = this.buildAccountAddListener();
        return  [
            {xtype  : 'button',text : '刷新',     listeners:refrushListeners    },
            {itemId : this.accountAdd,xtype  : 'button',text : '账户添加',disabled:false, listeners:accountAddListener},
            {itemId : this.accountEdit,xtype  : 'button',text : '账户修改', disabled:true,listeners:accountEditListeners},
        ];
    },
    listeners : {
        rowclick:function(thisViewTable, record, tr, rowIndex, e, eOpts ){
            Util.getCmp(this.accountEdit).setDisabled(false);
            //总经理不能修改
           /* if(!(record.get('bizSuperadmin')==2)){
                Util.getCmp(this.roleEdit).setDisabled(false);
            }else{
                Util.getCmp(this.roleEdit).setDisabled(true);
            }*/
        }
    },

    buildAccountAddListener : function () {
        var thiz = this;
        var listener = {
            click: function (thisCmp, e, eOpts) {
                var win = null;
                win = new Module.account.AddOrEditWin({
                    width       :   300,
                    height      :   300,
                    title       : '账户添加',
                    listeners   : {
                        saveclick   : function(thisCmp,btn){
                            var cfg = {
                                url : SysConfig.ctx + '/account/saveAccount.do',
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
    }

});
