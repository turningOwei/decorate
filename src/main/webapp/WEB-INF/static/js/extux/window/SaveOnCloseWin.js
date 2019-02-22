/**
 * @author tangL
 * @date 2014-11-02
 */
Ext.define('ExtUx.window.SaveOnCloseWin', {
	extend 		  : 'Ext.Window',
	plain         : true,
	layout	      : 'fit',
	autoShow	  : true,
	layout		  : 'fit',
	border        : false,
	isAutoTip     : false, // 是否自动提示
	isAutoClose   : true, // 是否自动关闭
	submitLabel   : '提交',
	initComponent : function() {
		var buttons = this.buildButtons();
		Ext.apply(this,{
			buttons : buttons
		});
		this.callParent();
	},
	buildButtons  : function () {
		return[{
			text    : this.submitLabel,
			itemId  : 'saveBtn',
			handler : function () {
				var thiz  = this;
				var yesFn = function() {
					var btn = thiz.down('#saveBtn');
					thiz.fireEvent('saveclick', thiz, btn);
				};
				
				if (this.isAutoTip)
					Msg.ynMsg('你确认要执行该操作吗?', yesFn, null);
				else
					yesFn.call();
				
			},
			scope   : this
		},{
			text    : '关闭',
			itemId  : 'closeBtn',
			handler : function () {
				var btn = this.down('#closeBtn');
				this.fireEvent('closeclick', this, btn);
			
				// 如果closeAcion 为destroy时 当调用close()时对象会destroy(异步 或者定时操作)
				// 这时如果监听closeclick 操作 this 或者btn对象 可能就会报错(因为他们已经destory了)
				if (this.isAutoClose)
					this.close();	
			},
			scope   : this
		}];
	}
});