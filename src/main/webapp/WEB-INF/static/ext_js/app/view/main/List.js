/**
 * This view is an example list of people.
 */
Ext.define('Sos.jni.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Sos.jni.store.Device'
    ],

    title: '设备信息',

    store: {
        type: 'device'
    },

    columns: [
        { text: '设备ID', 		dataIndex: 'devId',			width:100},
        { text: '设备IP', 		dataIndex: 'devIp', 		width:100,		flex: 1 },
        { text: '设备名称', 		dataIndex: 'devName', 		flex: 1 },
        { text: '设备类型', 		dataIndex: 'devType', 		flex: 1 ,
        	renderer:function(value, record){
        		if(value == 7){
        			return '网络化报警终端';
        		}
        	}
        },
        { text: '设备当前状态', 	dataIndex: 'devState', 		flex: 1 ,
        	renderer:function(value, record){
	    		if(value == 1 || value == 20 || value == 17){
	    			var au = document.createElement("audio");
		    		au.preload="auto";
		    		au.src = contextPath+"/static/resources/sound/ALARM1.WAV";
		    		
		    		au.addEventListener('ended', function () { 
		    			setTimeout(function () {au.play();}, 500); 
		    			}, false); 
		    		au.play();
	    		}
	    		var result = '',
	    			alarm1 = '<font size="3" color="red">告警</font>',
	    			alarm2 = '<font size="3" color="red">网络警报设备:触发警报中</font>',
	    			alarm3 = '<font size="3" color="red">消防告警</font>';
	   
	    		switch(value){
		    		case 		 0:	   result = '服务器寻呼';                  	break;
		    		case         1:	   result = alarm1;                  		break;
		    		case 		 2:	   result = '被寻呼';                  		break;
		    		case         3:    result = '发起寻呼';               		break;
		    		case         4:    result = '对讲';               			break;
		    		case         5:	   result = '电话';                  			break;
		    		case         6:	   result = '钟声';                  			break;
		    		case         7:	   result = '服务器广播节目或者采集音源';     	break;
		    		case         8:	   result = '点播';                  			break;
		    		case         9:	   result = '定时';                  			break;
		    		case         14:   result = '离线';               			break;
		    		case         15:   result = '中转中:中转服务器的状态';        	break;
		    		case         16:   result = '正在采集中:音频采集卡状态';      	break;
		    		case         17:   result = alarm2;			      			break;
		    		case         18:   result = '控制其它设备播放广播';           	break;
		    		case         19:   result = '监听状态';                		break;
		    		case         20:   result = alarm3;                			break;
		    		case         31:   result = '空闲';                 			break;
	    		}
	    		return result;
	    	}
        },
        { text: '设备音量(分贝)', 		dataIndex: 'devVolume', 	flex: 1 },
        { text: '设备其他信息', 	dataIndex: 'remark', 		flex: 1 },
    ],

    listeners: {
        select: 'onItemSelected',
        /*rowclick : function( thiz , record , tr , rowIndex , e , eOpts){
        	console.log(this.getStore());
        },*/
        afterlayout :function( thiz , layout , eOpts ) {
        	//console.log(this.getStore());
        }
    }
});
