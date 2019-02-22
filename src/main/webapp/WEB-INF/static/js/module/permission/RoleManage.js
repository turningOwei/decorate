Ext.define('Module.permission.RoleManage', {
    extend 		: 'Ext.panel.Panel',
    xtype  		: 'permissionrolemanage',
    requires    : ['Module.permission.RoleQry','Module.permission.ResourceQry'],
    initComponent : function() {
        this.callParent();
    },
    layout: {
        type: 'border',
        regionWeights: {
            west: 20,
            north: 10,
            south: -10,
            east: -20
        }
    },
    items: [{
        title: '角色',
        region: 'center',     // center region is required, no width/height specified
        xtype: 'permissionroleqry',
        split: true,
        layout: 'fit',
        margin: '5 5 0 0',
        listeners : {
            rowclick:function( thisGrid, record, tr, rowIndex, e, eOpts ){
                var resCmp = Util.getCmp('rolemange-resourceid'),
                    roleId = record.get('oid'),
                    isSuperAdmin = record.get('isSuperAdmin');
                resCmp.setCollapsed(false);
                var defaultParams = {
                    roleId : roleId
                };
                resCmp.setTitle('资源(菜单)-'+record.get('name'));
                resCmp.roleId = roleId;
                resCmp.isSuperAdmin = isSuperAdmin;

                resCmp.loadByDefaultParams(defaultParams);
            }
        }
    },{
        itemId:'rolemange-resourceid',
        title: '资源(菜单)',
        region:'east',
        selModel:{
            selType : 'checkboxmodel',
            mode    : 'MULTI'
        },
        xtype: 'permissionesourceqry',
        margin: '5 0 0 5',
        width: 600,
        split: true,
        collapsed : false, //展开资源panel
        collapsible: true,   // make collapsible
        layout: 'fit',
        buildTbar : function(){
            this.roleResourceAdd = Ext.id();
            var refrushListeners = {};
            var roleResourceAddListener = {
                click : function ( thisButton, e, eOpts ) {
                    var thisGrid = this.ownerCt.ownerCt;
                    var ajaxParams = {
                        roleId      : thisGrid.roleId,
                        resourceIds : thisGrid.getSp('oid')
                    };
                    ExtUx.Ajax.request({
                        url    : SysConfig.ctx + '/permission/roleresource/saveRoleResource.do',
                        params : ajaxParams,
                        //isSuccTip : false,
                        isFailTip : false,
                        succFn : function(response, result, opti) {
                            //Msg.msg('保存成功!');
                        }
                    });
                }
            };
            return  [
                {xtype  : 'button',text : '刷新',     listeners : refrushListeners    },
                {itemId : this.roleResourceAdd,xtype  : 'button',text : '保存',disabled:false, listeners:roleResourceAddListener}
            ];
        },
        listeners : {
            afterrender : function( thisGrid, eOpts ){

                thisGrid.getStore().on('load',function(thisStore, records, successful, eOpts ){
                    Util.getCmp(thisGrid.roleResourceAdd).setHidden(thisGrid.isSuperAdmin);
                    var sm  = thisGrid.getSelectionModel();
                    /**
                     * 选中重置
                     */
                    sm.deselectAll();

                    for(var i = 0;i < records.length;i++){
                        if(records[i].get('checkFlag')==true){
                            /**
                             * 保留之前的选择,
                             * 触发选中事件
                             */
                            sm.select(i,true,false);
                        }
                    }
                },this);


            }
        }
    }]

});