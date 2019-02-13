/**
 * @author weip
 * @date 2016-12-17
 */
Ext.define('Module.budgetListManage.Panel', {
    //dataUrl     :  SysConfig.ctx + '/roomPlace/selectAll.do',
    extend: 'Ext.container.Container',
    //layout: 'border',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    isLayout: true,
    xtype: 'budgetListManagePanel',
    rootVisible: false,
    requires: ['Module.decorateProject.QueryPanel', 'Module.roomPlace.QueryPanel', 'Module.budgetList.QueryPanel'],
    initComponent: function () {
        this.callParent();
    },
    items: [{
        title: '预算工程',
        xtype: 'decorateProjectQueryPanel',
        collapseDirection: 'left',
        //split: true,         // enable resizing
        collapsible: true,
        flex: 3,
        margin: '0 2 0 0',
        listeners: {
            rowclick: function (thisViewTable, record, tr, rowIndex, e, eOpts) {
                var projectId = record.get('id');
                var param = {
                    'projectId': projectId
                };
                Util.getCmp('roomPlaceId').setButtonAble(projectId);
                Util.getCmp('roomPlaceId').load(param);
                Util.getCmp('budgetListId').reset();
            }
        }
    }, {
        title: '房间位置',
        itemId: 'roomPlaceId',
        dataUrl: SysConfig.ctx + '/roomPlace/selectByProjectId.do',
        isAutoLoad: false,
        xtype: 'roomPlaceQueryPanel',
        collapseDirection: 'left',
        flex: 2,
        margin: '0 2 0 0',
        listeners: {
            rowclick: function (thisViewTable, record, tr, rowIndex, e, eOpts) {
                var roomPlaceId = record.get('id');
                var param = {
                    'roomPlaceId': roomPlaceId
                };
                Util.getCmp('budgetListId').setButtonAble(roomPlaceId);
                Util.getCmp('budgetListId').load(param);
            }
        }
    }, {
        title: '清单项目',
        itemId: 'budgetListId',
        xtype: 'budgetListQueryPanel',
        collapseDirection: 'left',
        isAutoLoad: false,
        dataUrl: SysConfig.ctx + '/budgetList/selectByRoomPlaceId.do',
        //split: true,         // enable resizing
        //collapsible: true,
        flex: 7,
        editFormParamObj: {
            decorateProjectId: '',
            roomPlaceId: ''
        }
    }]


});
