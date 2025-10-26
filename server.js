const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
  const now = new Date();
  
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Practical 8.1: dispDate.jsp</title>
  <style>
    body {
      font-family: system-ui, -apple-system, Arial, sans-serif;
      padding: 20px;
      background-color: white;
    }
  </style>
</head>
<body bgcolor="white">
  <h2>Practical 8.1: Display Date and Time</h2>
  <p><strong>Current Date/Time (toString):</strong></p>
  <p>${now.toString()}</p>
  <p><strong>GMT String (toGMTString):</strong></p>
  <p>${now.toGMTString()}</p>
</body>
</html>
  `);
});

app.listen(port, () => {
  console.log(`Practical 8.1 (dispDate) running at http://localhost:${port}/`);
});
