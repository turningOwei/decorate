<!DOCTYPE HTML>
<html manifest="">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"  %>
 <%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %> 
<c:set var="ctx"  value="http://${header['host']}${pageContext.request.contextPath}"/>
<script type="text/javascript">
var contextPath = "<%=this.getServletContext().getContextPath() %>";
var staticExtPath = contextPath + "/static/sos_jni_extjs/";
</script>
<head>
 	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
     <title>大佛寺实时监控</title>
     <script type="text/javascript" src="<%=this.getServletContext().getContextPath() %>/static/sos_jni_extjs/ext/build/ext-all-debug.js?dc_='<%=new java.util.Date().getTime()%>'"></script>
     <script type="text/javascript" src="<%=this.getServletContext().getContextPath() %>/static/sos_jni_extjs/ext/locale/locale-zh_CN.js"></script>
     <script type="text/javascript" src="<%=this.getServletContext().getContextPath() %>/static/sos_jni_extjs/loadConfig.js?dc_='<%=new java.util.Date().getTime()%>'"></script>
     <script type="text/javascript" src="<%=this.getServletContext().getContextPath() %>/static/sos_jni_extjs/app/Application.js?dc_='<%=new java.util.Date().getTime()%>'"></script>
	 <link rel="stylesheet" type="text/css" href= "<%=this.getServletContext().getContextPath() %>/static/sos_jni_extjs/classic/Sos.jni-all.css">
	<!-- 系统模块加载路径配置 -->
<%--      <script type="text/javascript" src="<%=this.getServletContext().getContextPath() %>/static/sos_jni_extjs/ext-bootstrap.js"></script> --%>
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
</head>
<body>

</body>
</html>