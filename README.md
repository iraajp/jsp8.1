# Practical 8.1: dispDate.jsp

This program demonstrates JSP implicit objects by displaying the current date and time (Node.js equivalent).

## How to run

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open in browser:

```
http://localhost:3003/
```

## What it does

- Displays current date/time using `Date` object
- Shows two formats:
  - `toString()` - local time representation
  - `toGMTString()` - GMT time representation
- Equivalent to JSP's `java.util.Date` usage

## Original JSP Code Reference

```jsp
<%@page language="java" isThreadSafe="false" import="java.io.*,java.util.*" %>
<html>
<body bgcolor="white">
<%
Date now = new Date();
out.println(now.toString());
out.println(now.toGMTString());
%>
</body>
</html>
```
