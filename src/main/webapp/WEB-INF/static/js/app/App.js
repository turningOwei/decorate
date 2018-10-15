/**
 * @author tangL
 * @date 2014-10-29
 */

App = function() {
	Ext.require([
         'Sys.user.form.LoginWin', 
         'App.Viewport',
         'Sys.user.form.FormWin'
    ]);
	
	var win			 = null;
		view		 = null;
		
	return {
		init  : function(data) {
			if (data.sessionStatus =='sessionInvalid') {
				Ext.require(['Sys.user.form.LoginWin', 'App.Viewport']);
				App.login(data);
			} else if(data.sessionStatus == 'sessionEffective') {
				App.initData(data);
			}
		},
		initData  : function(data) {
			Ext.Logger.info('data initializing...');
			if (view == null)
				view = Ext.create('App.Viewport');
			view.initData(data);		
		},
		logout  : function() {
			var ysFn = function() {
		    	ExtUx.Ajax.request({
		    		url 	 : SysConfig.ctx + 'loginout.do',
		    		succFn	 : function(response, result, opti) {
		    			App.reLogin();
		    		}
		    	});
	    	};
	    	Msg.ynMsg('你确认要注销该用户吗?', ysFn);
		},
		login	: function() {
			App.createWin('用户登陆');
			win.show();
		},
		reLogin : function() {
			App.createWin('<font color="red">当前用户失效, 请重新登陆...</font>');
			if (!win.isVisible()) {
				win.getForm().reset();
				win.show();
			}
		},
		posSettle : function() {
			pos_settle();
		},
		posSign : function() {
			pos_signIn();
		},
		editLogin : function() {
			var loginFormWin = Ext.create('Sys.user.form.FormWin',{
				title  : '账户修改',
				modal  : true
			});
			var form = loginFormWin.getForm();
			
			var succFn    = function(f, a) {
				loginFormWin.close();
				App.reLogin();				
			};
			var onLoginFn = function() {
				loginFormWin.editLogin(succFn);
			};
			
			loginFormWin.on('saveclick', onLoginFn);
			loginFormWin.on('enterfield', onLoginFn);
			
			form.editLoginSetFields();
			loginFormWin.show();
		},
		createWin : function(title) {
			if (win == null) {
				win = Ext.create('Sys.user.form.LoginWin', {
					closeAction : 'hide'
				});
				var loginSuccFn = function(f, a) {
					var resultData = a.result.data;
					App.initData(resultData);
					
					var mainPanel = view.getComponent('mainPanel');
					mainPanel.removeAll();
					win.close();
				};
				var onLoginFn = function() {
					win.getForm().login(loginSuccFn);
				};
				
				win.on('saveclick', onLoginFn);
				win.on('enterfield', onLoginFn);
			}
			win.setTitle(title);
		}
	};
}();
