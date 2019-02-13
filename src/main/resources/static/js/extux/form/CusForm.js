Ext.define('ExtUx.form.CusForm', {
	bodyPadding : '10px',
	extend      : 'Ext.form.Panel',
	defaultType : 'textfield',
	initComponent : function() {
		this.callParent();
	},
	getValues   : function (b) {
		return this.getForm().getValues(b);
	},
	setValues 	: function (o) {
		return this.getForm().setValues(o||{});
	},
	isValid	  	: function () {
		return this.getForm().isValid();
	},
	getRecord	: function(){
		console.log(this.getForm().getRecord);
		return this.getForm().getRecord();
	},
	clrForm	  	: function () {
		var values = this.getValues();
		var clearValues = {};
		
		for(var vName in values) {
			clearValues[vName] = '';
		}
		
		this.setValues(clearValues);
	},
	reset				: function () {
		this.getForm().reset();
	},
	load			   : function (cfg) {
		cfg = cfg || {};
		Ext.applyIf(cfg,{
			method		 : 'POST',
			waitMsg 	 : '请稍候...',
			isAutoSet 	 : true,	
			waitTitle 	 : '加载数据'
		});
		
		var thiz = this;
		var scope = cfg.scope || this;
		var succFn = cfg.success;
		var failFn = cfg.failure;
		var onFailure = this.onFailure;

		cfg.success = function (form, action) {
			var result = action.result || {};
			if(Ext.isFunction(succFn)) {
				succFn.call(scope, form, action);
			}
			if(cfg.isAutoSet) {
				var data = result.data;
				if(data) {
					thiz.setCusRawValues(form, data);
				}
			}
		};
		cfg.failure = function (form, action) {
			var result = action.result || {};
			onFailure(form, action);
		};
		this.getForm().load(cfg);
	},
	submit				: function (cfg) {
		var form = this.getForm();
		/************************************/
		cfg = cfg || {};
		Ext.applyIf(cfg,{
			method				: 'POST',
			waitTitle 			: '提交数据',
			waitMsg 			: '请稍候...',
			isSuccTip			: true,
			isFailTip			: true
		});
		/************************************/
		var succFn    = cfg.success,
			failFn    = cfg.failure,
			isSuccTip = cfg.isSuccTip,
			isFailTip = cfg.isFailTip,
			scope     = cfg.scope || this,
			onFailure = this.onFailure; // 默认错误处理
		/************************************/
		cfg.success = function (form, action) {
			if(isSuccTip) {
				var result = action.result || {};
				var msg = result.msg;
				Msg.msgHide(msg || "提交成功");
			}
			if(Ext.isFunction(succFn)) {
				succFn.call(scope, form, action);
			}
		};
		cfg.failure = function (form, action) {
			onFailure(form, action);
			if(Ext.isFunction(failFn)) {
				failFn.call(scope, form, action);
			}
			if(isFailTip) {
				var result = action.result || {};
				var msg = result.msg;
				Msg.errorHide(msg || "操作失败");
			}
		};
		/*****************************************/
		var isValid = form.isValid();
		if(isValid)
			form.submit(cfg);
	},
	onFailure			:  function(form, action) {		
		var me = form;
		if (action.waitMsg) {
            var messageBox = Ext.MessageBox,
                waitMsgTarget = me.waitMsgTarget;
            if (waitMsgTarget === true) {
                me.owner.el.unmask();
            } else if (waitMsgTarget) {
                waitMsgTarget.unmask();
            } else {
                messageBox.hide();
            }
        }
        
		var failureType = action.failureType;
		var result = action.result || {};
		var msg    = result.msg;
		/*********************** 错误处理 **************************/
		if(Ext.form.Action.CONNECT_FAILURE == failureType) {
			Msg.error('请求失败');
		} else if(Ext.form.Action.SERVER_INVALID == failureType) {
			Msg.error(msg||"提交失败");
		} else if(Ext.form.Action.CLIENT_INVALID == failureType) {
			Msg.error('请填写必填项');
		} else if(Ext.form.Action.LOAD_FAILURE  == failureType) {
			var loadErrMsg = "加载数据失败  " + msg ;
			Msg.error(loadErrMsg);
		}
	},
	setCusRawValues    : function(form, data) {
		var thiz = this;
		/**
		 * 加载表单数据时 显示displayName 只对combox有效
		 */
		form.getFields().each(function(field){
			if (field && field.rawProp) {
				var displayField = field.displayField,
					valueField	 = field.valueField,
					name		 = field.name,
					rawProp		 = field.rawProp,
					jsonStr      = Ext.String.format('[{"{0}":"{1}", "{2}":"{3}"}]', 
									valueField, 
									data[name], 
									displayField, 
									data[rawProp]),
					json		= Ext.decode(jsonStr);

				field.displayTplData = json;
				field.setRawValue(field.getDisplayValue());
				//方便设置参数
				thiz.fireEvent('setRawValueEvent',field,name,data[name],data);
			}
		});

	}
});