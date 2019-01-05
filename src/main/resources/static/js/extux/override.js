(function(){
	var fn = Ext.data.NodeInterface.decorate;
   /**
     * reload this node.
     * @param {Boolean} [recursive=false] True to recursively expand all the children
     * @param {Function} [callback] The function to execute once the expand completes
     * @param {Object} [scope] The scope to run the callback in
     */
	var reloadFn = function(recursive, callback, scope) {
			this.collapse(true);
			this.set('loaded', false);
			this.expand(recursive, callback, scope);
	};
	Ext.data.NodeInterface.decorate = function(modelClass) {
		modelClass.prototype.reload = reloadFn;
		fn.call(this, modelClass);
	};
	
	var	requiredTest = /^[ ]*$/,
		loginNameTest =/^[\w]+$/,
		passwordTest  =/^[\w]+$/;
		
	Ext.apply(Ext.form.field.VTypes, {
	    required		: function(val, field) {
	        return !(requiredTest.test(val));
	    },
	    requiredText	: '文本不能为空',
	    loginName		: function(val, field) {
	        return loginNameTest.test(val);
	    },
	    loginNameText	: '用户名只是数字 字母 下划线',
	    password		: function(val, field) {
	        return passwordTest.test(val);
	    },
	    passwordText	: '密码只能是用数字 字母 下划线'
	});
})();

