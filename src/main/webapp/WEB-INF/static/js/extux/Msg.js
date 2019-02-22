var Msg = function() {
	return {
		msg : function(msg, cfg) {
			cfg = cfg || {};
			cfg = Ext.isFunction(cfg) ? {cb : cfg} : cfg;
			var base = {
				title : '消息',
				msg : "<br />" + msg,
				buttons : Ext.Msg.OK,
				icon : Ext.Msg.INFO,
				width : 300,
				fn : cfg.cb || Ext.emptyFn
			};
			Ext.applyIf(cfg, base);
			Ext.MessageBox.show(cfg);
		},
		msgHide : function(msg, cfg) {
			this.msg(msg, cfg);
			cfg = cfg || {};
			this.defHideMsg(cfg.deferTime);
		},
		defHideMsg: function(time) {
			var time = time ? time : 1000;
	
			Ext.defer(function() {
				Ext.MessageBox.hide();
			}, time);
		},
		warn : function(msg, cfg) {
			cfg = cfg || {};
			cfg = Ext.isFunction(cfg) ? {cb : cfg} : cfg;
			var base = {
				title : '警告',
				msg : "<br />" + msg,
				buttons : Ext.Msg.OK,
				icon : Ext.Msg.WARNING,
				width : 300,
				fn : cfg.cb || Ext.emptyFn
			};
			Ext.applyIf(cfg, base);
			Ext.MessageBox.show(cfg);
		},
		warnHide : function (msg, cfg) {
			cfg = cfg || {};
			this.warn(msg);
			this.defHideMsg(cfg.deferTime);
		},
		error 	: function(msg, cfg) {
			cfg = cfg || {};
			cfg = Ext.isFunction(cfg) ? {cb : cfg} : cfg;
			var base = {
				title : '错误',
				msg : "<br />" + msg,
				buttons : Ext.Msg.OK,
				icon : Ext.Msg.ERROR,
				width : 300,
				fn : cfg.cb || Ext.emptyFn
			};
			Ext.applyIf(cfg, base);
			Ext.MessageBox.show(cfg);
		},
		errorHide : function (msg, cfg) {
			cfg = cfg || {};
			this.error(msg);
			cfg.deferTime = cfg.deferTime || 2000;
			this.defHideMsg(cfg.deferTime);
		},
		confirm : function(msg, cfg) {
			cfg = cfg || {};
			cfg = Ext.isFunction(cfg) ? {cb : cfg} : cfg;
			var base = {
                title : "确认",
                msg : msg,
                width : 300,
                buttons: Ext.Msg.YESNO,
                fn: cfg.cb || Ext.emptyFn,
                icon: Ext.Msg.QUESTION
			};
			Ext.applyIf(cfg, base);
			Ext.MessageBox.show(cfg);
		},
		ynMsg : function (text, yesFn, noFn, cfg) {
			cfg = cfg || {};
			var scope = cfg.scope || this;
			var config = {
					title		: "提示", 
					msg			: text, 
					width		: 300, 
					buttons		: Ext.Msg.YESNO, 
					fn			: function (text) {
						if (text == "yes") {
							if (Ext.isFunction(yesFn)) {
								yesFn.call(scope);
							}
						} else {
							if (Ext.isFunction(noFn)) {
								noFn.call(scope);
							}
						}
					}, 
					icon	    : Ext.MessageBox.QUESTION
			};
			Ext.apply(config,cfg);
			Ext.Msg.show(config);
		},
		prompt : function(msg, cfg){
			cfg = cfg || {};
			cfg = Ext.isFunction(cfg) ? {cb : cfg} : cfg;
			var base = {
                title : '输入框',
                msg : msg,
                buttons: Ext.Msg.OKCANCEL,
                minWidth:300,
                fn : cfg.cb || Ext.emptyFn,
                prompt:true
            };
            Ext.applyIf(cfg, base);
			Ext.MessageBox.show(cfg);
		}
	};
}();