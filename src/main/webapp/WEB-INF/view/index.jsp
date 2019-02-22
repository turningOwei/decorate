<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="google" content="notranslate" />
    <title>系统</title>
    <%@ include file="/WEB-INF/view/common/all_import"%>
    <script type="text/javascript" defer>
        Ext.onReady(function() {
            var json = Ext.decode('${result}');
            //App.json = json;
            App.init(json);
        });
    </script>

</head>
<body>
<div style="display:none">
    <OBJECT id="DUmsocx" classid=clsid:E083E848-B477-4F16-BCD5-72D74BC1E2AF>
        <PARAM NAME="_ExtentX" VALUE="7000">
        <PARAM NAME="_ExtentY" VALUE="4000">
    </OBJECT>

</div>
</body>
</html>