/**
 * 简单文件上传
 */
Ext.define('ExtUx.form.UploadForm',{
   extend        : 'Ext.form.FormPanel',
   xtype         : 'uploadform',
   fileFieldCfg  : {},
   uploadUrl     : null,
   initComponent : function() {
   		this.items = this.buildItems();
   		this.on('destroy', this.onUploadFormDestoryFn);
   		this.callParent();
   },
   buildItems : function () {
   		var fileFieldCfg = {
	   		flex       : 1,
	   		fieldLabel : '',
	   		xtype      : 'filefield',
	        name       : 'file',
	        fieldLabel : '文件',
	        labelWidth : 50,
	        msgTarget  : 'side',
	        allowBlank : false,
	        anchor     : '100%',
	        buttonText : '选择文件'
   		};
   		var upLoadBtn = this.buildUpLoadBtn();
   		Ext.apply(fileFieldCfg, this.fileFieldCfg);
   		
   		return [{
		   xtype   : 'container',
		   layout  : {
		        type    : 'hbox',
		        align   : 'stretch',
		        padding : '2 2 5 5'
		    },
		   items   : [
		       fileFieldCfg,
		       {xtype : 'label', width : 2},
		       upLoadBtn
		   ]
	   }];
   },
   buildUpLoadBtn : function () {
   		return Ext.create('Ext.Button', {
		    text    : '上传', 
		    handler : this.onUploadBtnFn, 
		    scope   : this
		});
   },
   onUploadBtnFn  : function() {
	    var thiz = this; 
 		var form = this.getForm();
 		if (form.isValid()) {
			 if (Ext.isEmpty(this.uploadUrl)) {
	   			Ext.Logger.error('上传路径为空');
	   			return;
	   		 }
	   		 
			 form.submit({
	            url     : this.uploadUrl,
	            waitMsg : '请稍后...',
	            success : function(fp, o) {
	            	if ( thiz.uploadHandle ) {
	            		thiz.uploadHandle( o.result )
	            	} else {
	            		Msg.msgHide(o.result.msg);
	            	}
	            },
	            failure: function(fp, o) {
	              Msg.error(o.result.msg);
	            }
	        });
 		}
   },
   onUploadFormDestoryFn : function(p) {
   		delete this.fileFieldCfg;
   }
});