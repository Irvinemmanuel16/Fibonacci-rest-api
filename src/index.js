const express = require('express');
const path = require('path');
const app = express();
const getFibonacci = require('./getFibonacci');

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/api/:index', (req, res) => {
  let { index } = req.params;
  try {
    let number = getFibonacci(index);
    res.status(200).json({ number });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
