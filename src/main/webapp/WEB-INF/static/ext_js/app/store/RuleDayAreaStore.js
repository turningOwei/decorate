Ext.define('Sos.jni.store.RuleDayAreaStore', {
    extend: 'Ext.data.Store',

    alias: 'store.ruleDayAreaStore',

    fields: [
        'id','startDay','endDay','description','memo',
        'createDate','updateDate'
    ],
    //data : {},
    //model: 'Sos.jni.model.DeviceModel',
    proxy: {
        type	: 'ajax',
        autoLoad: true,
        url		: contextPath+'/vdpgRlDayArea/listAll',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
