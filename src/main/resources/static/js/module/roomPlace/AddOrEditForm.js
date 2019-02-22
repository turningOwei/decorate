Ext.define('Module.roomPlace.AddOrEditForm', {
    requires: ['Module.roomPlace.RoomPlaceCombobox'],
    xtype: 'roomPlaceAddOrEditForm',
    extend: 'ExtUx.form.CusForm',
    defaults: {
        anchor: '100%'
    },
    items: [{
        fieldLabel: '自定义标识',
        xtype: 'checkbox',
        name: 'customizeFlag',
        listeners: {
            change: function (thisCmp, newValue, oldValue, eOpts) {
                if (newValue) {
                    Util.getCmp('customizeRoomPlaceName').setDisabled(false);
                    Util.getCmp('customizeRoomPlaceName').setConfig('allowBlank', true);
                } else {
                    Util.getCmp('customizeRoomPlaceName').setDisabled(true);
                    Util.getCmp('customizeRoomPlaceName').setConfig('allowBlank', false);
                    Util.getCmp('customizeRoomPlaceName').setValue();
                }
            }
        }
    }, {
        fieldLabel: '房间位置名称',
        xtype: 'roomPlaceCombobox',
        name: 'roomPlaceName',
        rawProp: 'roomPlaceName',
    }, {
        fieldLabel: '自定义房间位置名称',
        name: 'customizeRoomPlaceName',
        //allowBlank: false,
        itemId: 'customizeRoomPlaceName',
        disabled: true,
        listeners: {
            blur: function (thisCmp, event, eOpts){
                var customizeRoomPlaceName = thisCmp.getValue();
                var successFn = function (response, opti) {
                    var responseText = response['responseText'];
                    var responseObj = eval('(' + responseText + ')');
                    if(!responseObj.validate){
                        thisCmp.setValue();
                        Msg.error(responseObj.msg);
                    }
                };
                var cfg = {
                    url: SysConfig.ctx + '/roomPlace/validAdd.do?customizeRoomPlaceName=' + customizeRoomPlaceName,
                    success: successFn
                }
                ExtUx.Ajax.request(cfg);
            }
        }
    }, {
        fieldLabel: '排序',
        name: 'orderFlag',
        xtype: 'numberfield',
        minValue: 1,
        allowBlank: false
    }, {
        fieldLabel: 'id',
        hidden: true,
        name: 'id'
    }, {
        fieldLabel: 'projectId',
        hidden: true,
        name: 'projectId'
    }, {
        fieldLabel: 'invalid',
        hidden: true,
        name: 'invalid'
    }]
});