/**
 * 简单封装extAjax请求成功操作，根据服务端返回AjaxResult对象的success判断成功或失败然提示进行操作
 * 如果涉及业务比较复杂请使用原始api
 * 前提条件: 
 * 			 服务端返回对象必须为ExtJsonForm对象格式的
 * @param {Object} response (Required)
 * @param {Object} succFn   当success为true时调用(Optional)
 * @param {Object} failFn   当success为false调用(Optional)
 */
Ext.ns('ExtUx');
ExtUx.Ajax = function() {
	/**
	 * Ext Ajax 事件处理
	 * 通过监听 requestexception beforerequest requestcomplete 处理公共请求
	 */
	 /* 
	  * 请求错误异常处理 主要匹配Http 状态 提示信息
	  * @param conn Ext.data.Connection
	  * @param response
	  * @options Ajax 配置项有Ext.ajax.request()传来
	  */
	var requestexceptionHandler = function (conn, response, options) {
		if(options.mskCfg && options.mskCfg.el != null)
				options.mskCfg.el.unmask();
			var status       = response.status,
			    msg          = '',
			    responseText = response.responseText,
			    result       = Ext.isEmpty(responseText) ? {} : Ext.decode(responseText),
			    rMsg         = result.msg;

			if(status == '1') {
				msg = '发送请求失败';
			} else if(status == '404') {
				msg = '请求的url不存在';
			} else if(status == '408') {
				msg = '请求超时';
			} else if(status == '405') {
				msg = '请求不被允许';
			} else if(status == '500') {
				return Msg.error(rMsg || "操作失败");
			} else if(status == '503') {//  服务器目前无法使用（由于超载或停机维护）。 通常，这只是暂时状态
				msg = '服务不可用';
			}
			Ext.Logger.error(msg + " status : "+ status +', url : ' + options.url);
	};
	/**
	 *	请求前事件处理
	 *  判断请求是否添加了mskCfg配置 如果存在mskCfg 则通过el对象调用mask遮住当前el对象
	 */
	var beforerequestHandler = function (conn, options) {
		var isMask   = options.isMask,
			scope    = options.scope || {};

		options.mskCfg   = Ext.applyIf(options.mskCfg || {},{
			msg : '正在处理请求...'
  		});
		
		var mskCfg    = options.mskCfg;
		    mskCfg.el = mskCfg.el || options.el || scope.el || Ext.getBody();			    
		
		if(isMask == true && mskCfg.el != null && mskCfg.el.mask) {
			mskCfg.el.mask(mskCfg.msg, mskCfg.cls);
		}
	};
	/**
	 *	请求完成事件处理
	 *  取消mask
	 */
	var requestcompleteHandler = function (conn, response, options) {
		var responseText = response.responseText,
				  isMask = options.isMask,
				  mskCfg = options.mskCfg || {};
				  
		if(isMask && mskCfg.el != null && mskCfg.el.unmask) {
			mskCfg.el.unmask();
		}
		
		if (responseText.indexOf('sessionInvalid') != -1) {		
			App.reLogin();
		}
	};
	Ext.Ajax.on('requestexception',requestexceptionHandler, this);
	Ext.Ajax.on('beforerequest', beforerequestHandler, this);
	Ext.Ajax.on('requestcomplete', requestcompleteHandler, this);

	return {
		request : function (cfg) {
			cfg = cfg || {};
			
			Ext.applyIf(cfg, {
				method		: 'post',
				isSuccTip   : true,
				isFailTip   : true,
				isMask      : true,
				success		: this.success
			});
			Ext.Ajax.request(cfg);
		},
		success	: function (response, opti) {
			var scope = opti.scope || ExtUx.Ajax;
			ExtUx.Ajax.succOper.call(scope, response, opti);
		},
		succOper : function(response, opti) {
			var succFn 	  = opti.succFn,
				failFn 	  = opti.failFn,
				isSuccTip = opti.isSuccTip,
				isFailTip = opti.isFailTip,
				responseText = response.responseText,
				result = {};

			if (!Ext.isEmpty(responseText)) {
				try {
					result = Ext.util.JSON.decode(responseText);
				} catch(e) {
				    Ext.Logger.error('返回值无法转换为Json对象 : ' + responseText);
					/**  如果转换失败则调用failFn 处理错误 */
					return;
				}
				var message = result.msg;
				if (result.success) {
					if (Ext.isFunction(succFn)) {
						succFn.call(this, response, result, opti);
					}
					ExtUx.Ajax.showTip(message || '操作成功', isSuccTip, result.success);
					
				} else {
					if (Ext.isFunction(failFn)) {
						failFn.call(this, response, result, opti);
					}
					ExtUx.Ajax.showTip(message || '操作失败', isFailTip, result.success);
					
				}
			} else {
				Msg.warnHide('返回值为空!!');
			}
		},
		showTip	: function (msg, isTip, success) {
			if(!Ext.isEmpty(msg)) {
				if(isTip == true) {
					if(success) {
						Msg.msgHide(msg);	
					}
					else 
						Msg.error(msg);
				}	
			}
		}
	};
}();