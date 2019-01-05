var Util = function() {
    return {
        getId: function (id) {
            return '#'+id;
        },
        getCmp : function(id){
            var idStr = '#'+ id;
            return Ext.ComponentQuery.query(idStr)[0];
        }
    };
}();