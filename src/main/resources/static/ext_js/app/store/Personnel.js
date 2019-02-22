Ext.define('Sos.jni.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
             'deviceId','deviceIp','deviceType','deviceStatus','deviceVolume','deviceOtherInfo'
    ],

    data: { items: [
        { deviceId: 'Jean Luc', deviceIp: "jeanluc.picard@enterprise.com", deviceStatus: "555-111-1111",deviceVolume:"",deviceOtherInfo:"" },
        { deviceId: 'Worf',     deviceIp: "worf.moghsson@enterprise.com",  deviceStatus: "555-222-2222" ,deviceVolume:"",deviceOtherInfo:""},
        { deviceId: 'Deanna',   deviceIp: "deanna.troi@enterprise.com",    deviceStatus: "555-333-3333" ,deviceVolume:"",deviceOtherInfo:""},
        { deviceId: 'Data',     deviceIp: "mr.data@enterprise.com",        deviceStatus: "555-444-4444",deviceVolume:"",deviceOtherInfo:"" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
