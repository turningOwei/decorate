Ext.define('Module.designer.SysDesignerItem',{
    dataUrl     :  SysConfig.ctx + '/designer/sysitem/listByPage.do',
    extend 		: 'ExtUx.grid.CusGrid',
    xtype  		: 'designersysitemgridpanel',
    isQueryPage : true,
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 2
    },
    rootVisible : false,
    //requires        : ['Module.account.AddOrEditWin','Module.permission.role.QueryPanel'],
    initComponent : function() {
        this.callParent();
    },
    buildFields     : function() {
        return [
            'oid',
            'itemName',
            'itemUnit',
            'itemUnitPrice',
            'memo',
        ];
    },
    buildColumns	: function() {
        var textEditor = {
            xtype: 'textfield',
            allowBlank: false
        },
        numberEditor = {
            xtype: 'numberfield',
            allowBlank: false
        };
        return [
            {text : '类别',     dataIndex : 'itemTypeCode',     width:200,},
            {text : '项目名称', dataIndex : 'itemName',         width:200,  editor:textEditor},
            {text : '项目单位', dataIndex : 'itemUnit',         width:200,  editor:textEditor},
            {text : '项目单价', dataIndex : 'itemUnitPrice',    width:160,  editor:numberEditor},
            {text : '备注',     dataIndex : 'memo',             width:160}
        ];
    },
    buildTbar       : function(){
        this.saveBtnId = Ext.id();
        var refrushListeners = function(){},
            accountAddListener = Ext.emptyFn,
            saveEditListener = this.buildSaveEditListener();


        return  [
            {xtype  : 'button',text : '刷新',     listeners : refrushListeners    },
            {itemId : this.accountAdd,xtype  : 'button',text : '账户添加',disabled:false, listeners:accountAddListener},
            {itemId : this.saveBtnId,xtype  : 'button',text : '保存', disabled:false,listeners:saveEditListener}
        ];
    },
    listeners : {
        rowclick:function(thisViewTable, record, tr, rowIndex, e, eOpts ){
            //Util.getCmp(this.saveBtnId).setDisabled(false);

        }
    },
    buildSaveEditListener : function(){
        var thiz = this;
        var clickFn = function (thisCmp, e, eOpts) {
            console.log(thiz.getStore().getModifiedRecords());
           // console.log(this.getSelection());
            console.log(thiz.getMidifiedData());
        };
        return {
            click : clickFn
        }
    }
});