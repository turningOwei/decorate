/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Sos.jni.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        //Ext.Msg.confirm('确定', 'Are you sure?', 'onConfirm', this);
    },
    
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    
	gridPnaelActivate    : function(newActiveItem , oldActiveItem, eOpts){
		newActiveItem.items.items[0].getStore().reload();
	},

	loadTimeIntvl : function(newActiveItem , oldActiveItem, eOpts){
		var cmp = newActiveItem.items.items[0];
		var params = {
			params : {
				ruleId : 1
			}
		}
		cmp.getStore().load(params);
	},
	/*smokesensorPanelActivate : function(newActiveItem , thiz , oldActiveItem , eOpts){
		var smokeSensorPanel = Ext.getCmp('smokeSensorPanelId');
		smokeSensorPanel.getStore().reload();
	},*/
	
	mainPanelActivate : function(newActiveItem , thiz , oldActiveItem , eOpts){
		/*var sendTime = 5000;
		
		var mainPanelSmokeSensorPanel = Ext.getCmp('mainPanelSmokeSensorId');
		
		var mainPanelSosPanel = Ext.getCmp('mainPanelSosId');
		
		var runner = new Ext.util.TaskRunner(),
        task;

	    task = runner.newTask({
	        run: function() {
	        	mainPanelSmokeSensorPanel.getStore().reload();
	        	mainPanelSosPanel.getStore().reload();
	        },
	        interval: sendTime
	    });
	    
		task.start();*/
	},

	ruleCfgSave : function(thiz,e,eOpts){
		console.log(thiz);
	},
	tbarOwnerCtOwnerRefresh :function(thiz,e,eOpts){
		var thisPanel = thiz.ownerCt.ownerCt;
		thisPanel.getStore().reload();
	}

});
