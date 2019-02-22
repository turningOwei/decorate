Ext.define('Sos.jni.module.rule.RuleStore', {
    extend: 'Ext.data.Store',

    alias: 'store.ruleStore',

    fields: [
        'id','ruleName','ruleDesc','createDate','updateDate','memo'
    ],
    //data : {},
    //model: 'Sos.jni.model.DeviceModel',
    proxy: {
        type	: 'ajax',
        autoLoad: true,
        url		: contextPath+'/vdpgRlRule/listAll',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
