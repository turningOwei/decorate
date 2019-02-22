/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Sos.jni.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Sos.jni.view.main.MainController',
        'Sos.jni.view.main.MainModel',
        'Sos.jni.model.DeviceModel',
        'Sos.jni.view.main.List',
        'Sos.jni.view.main.SmokeSensorPanel',
        'Sos.jni.view.main.MainPanel',

        'Sos.jni.module.ruleCfg.RuleCfgPanel',
        'Sos.jni.view.main.RuleDayAreaPanel',

        'Sos.jni.module.rule.RulePanel',
        'Sos.jni.module.toDeal.ToDealPanel',
        'Sos.jni.module.timeIntvl.TimeIntvlPanel'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{appName}'
            },
            flex: 0
        },
        //iconCls: 'fa-th-list'
    },
    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title   : '矫正规则配置',
        iconCls : 'fa-th-large',
        items: [{
            id	 : 'ruleCfgPanelId',
            xtype: 'ruleCfgPanel'
        }],
        autoScroll : true,
        listeners	: {
            activate : 'gridPnaelActivate'
        }
    },{
        title   : '时间区间',
        iconCls : 'fa-calendar-times-o',
        items: [{
            id	 : 'ruleDayAreaPanelId',
            xtype: 'ruleDayAreaPanel'
        }],
        autoScroll : true,
        listeners	: {
            activate : 'gridPnaelActivate'
        }
    },{
        title   : '矫正规则',
        iconCls : 'fa-registered',
        items: [{
            xtype: 'rulePanel',
            ref  : 'rulePanel'
        }],
        autoScroll : true,
        listeners	: {
            activate : 'gridPnaelActivate'
        }
    },{
        title   : '日时段详细规则',
        iconCls : 'fa-gg-circle',
        items: [{
            xtype: 'timeIntvlPanel',
        }],
        autoScroll : true,
        listeners	: {
            activate : 'loadTimeIntvl'
        }
    },{
        title   : '处理方式',
        iconCls : 'fa-get-pocket',
        items: [{
            xtype: 'toDealPanel',
        }],
        autoScroll : true,
        listeners	: {
            activate : 'gridPnaelActivate'
        }
    },{
        title: '说明',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }]
    
});
