Ext.define('Sos.jni.module.ruleCfg.RuleCfgStore', {
    extend: 'Ext.data.Store',

    alias: 'store.ruleCfgStore',

    fields: [
        'id','name','ruleId','dayAreaId','priority','ruleDesc','description','memo',
        'createDate','updateDate','rlRule'
    ],
    //data : {},
    //model: 'Sos.jni.model.DeviceModel',
    proxy: {
        type	: 'ajax',
        autoLoad: true,
        url		: contextPath+'/vdpgRlCfg/listAll',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
