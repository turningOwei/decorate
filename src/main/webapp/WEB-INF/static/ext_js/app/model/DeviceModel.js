Ext.define('Sos.jni.model.DeviceModel', {
    extend: 'Ext.data.Model',
    
    alias: 'model.device',
    
    
   /* { text: '设备ID', 		dataIndex: 'deviceId' },
    { text: '设备IP', 		dataIndex: 'deviceIp', 			flex: 1 },
    { text: '设备类型', 		dataIndex: 'deviceType', 		flex: 1 },
    { text: '设备当前状态', 	dataIndex: 'deviceStatus', 		flex: 1 },
    { text: '设备音量', 		dataIndex: 'deviceVolume', 		flex: 1 },
    { text: '设备其他信息', 	dataIndex: 'deviceOtherInfo', 	flex: 1 }*/
    
    fields: [
        {name: 'deviceId',  type: 'string'},
        {name: 'deviceIp',   type: 'string', convert: null},
        {name: 'deviceType', type: 'string'},
        {name: 'deviceStatus', type: 'string'},
        {name: 'deviceVolume', type: 'string'},
        {name: 'deviceOtherInfo', type: 'string', defaultValue: true, convert: null}
    ]
});