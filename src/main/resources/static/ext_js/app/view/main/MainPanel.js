Ext.define('Sos.jni.view.main.MainPanel', {
	extend	: 'Ext.panel.Panel',
    xtype	: 'mainpanel',
    requires: [
       'Sos.jni.view.main.SmokeSensorPanel',
       'Sos.jni.view.main.List'
    ],
    layout	:'column',
    items	: [{
        title	: 'sos监控',
        id		: 'mainPanelSosId',
        xtype	: 'mainlist',
        //height	: 320,
        columnWidth: 1,
        autoScroll	: true
    },{
        title  		: '烟感监控',
        id			: 'mainPanelSmokeSensorId',
        xtype		: 'smokeSensorPanel',
       // height		: 320,
        columnWidth	: 1,
        autoScroll	: true
    }]
});