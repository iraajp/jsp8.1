const express = require('express');
const app = express();
const port = 3003;

app.use(express.static(__dirname));

app.get('/api/date', (req, res) => {
  const now = new Date();
  res.json({
    date: now.toString(),
    gmt: now.toGMTString()
  });
});

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});
