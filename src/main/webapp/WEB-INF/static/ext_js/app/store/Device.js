Ext.define('Sos.jni.store.Device', {
    extend: 'Ext.data.Store',

    alias: 'store.device',

    fields: [
		'devId',		
		'devIp', 	
		'devName', 	
		'devType', 	
		'devState', 	
		'devVolume', 
		'remark'
    ],
    data : {},
    /*data: { items: [
		{ deviceId: 'Jean Luc', deviceIp: "jeanluc.picard@enterprise.com", deviceStatus: "555-111-1111",deviceVolume:"",deviceOtherInfo:"" },
		{ deviceId: 'Worf',     deviceIp: "worf.moghsson@enterprise.com",  deviceStatus: "555-222-2222" ,deviceVolume:"",deviceOtherInfo:""},
		{ deviceId: 'Deanna',   deviceIp: "deanna.troi@enterprise.com",    deviceStatus: "555-333-3333" ,deviceVolume:"",deviceOtherInfo:""},
		{ deviceId: 'Data',     deviceIp: "mr.data@enterprise.com",        deviceStatus: "555-444-4444",deviceVolume:"",deviceOtherInfo:"" }
    ]},*/

    /*proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    	type	: 	'ajax',
    	autoLoad: true,
    	//model	: 'Sos.jni.model.DeviceModel',
        //model	: "User",
    	//url		: 	contextPath+'/sos/deviceInfo',
    	url 	: 'http://localhost:8080/sos_jni/sos/deviceInfo',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }*/
    model: 'Sos.jni.model.DeviceModel',
    proxy: {
        type	: 'ajax',
        autoLoad: true,
        url		: contextPath+'/sosDevice/deviceInfo',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    listeners : {
    	beforeload : function( store , operation , eOpts){
    		
    	}
    }
});
