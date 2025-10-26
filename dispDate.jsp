<%@page language="java" isThreadSafe="false" import="java.io.*,java.util.*" %>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>8.1 dispDate.jsp</title>
  <style>
    body {
      font-family: system-ui, -apple-system, Arial, sans-serif;
      padding: 20px;
      background-color: white;
    }
  </style>
</head>
<body bgcolor="white">
  <h2>8.1 dispDate.jsp - Display Date and Time</h2>
  <p><strong>Current Date/Time (toString):</strong></p>
  <p>
<%
  Date now = new Date();
  out.println(now.toString());
%>
  </p>
  <p><strong>GMT String (toGMTString):</strong></p>
  <p>
<%
  out.println(now.toGMTString());
%>
  </p>
  <p><a href="index.jsp">← Back to index</a></p>
</body>
</html>
