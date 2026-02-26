const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<html><head><title>INFRA-03 T2 Backend</title></head><body><h1>Pando T2 Backend App</h1><p>Port: ' + PORT + '</p><p>Project: ' + (process.env.PANDO_PROJECT_ID || 'unknown') + '</p></body></html>');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', port: PORT, projectId: process.env.PANDO_PROJECT_ID, timestamp: Date.now() });
});

app.listen(PORT, () => console.log('T2 app running on port', PORT));
