const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const https = require('https');
const fs = require('fs');

// traffic will be made available here
const HOST = 'localhost';
const PORT = 3001;

// Traffic will be sourced from here
const TARGET_URL = 'http://localhost:3000';

const app = express();

// Logging
app.use(morgan('[:date[iso]] :method :url :status'));

app.use(cors());

// Proxy endpoints
app.use(
  '/',
  createProxyMiddleware({
    target: TARGET_URL,
    changeOrigin: true,
  })
);

const httpsOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
};

const httpsServer = https.createServer(httpsOptions, app);

httpsServer.listen(PORT, HOST, () => {
  console.log(`Proxy started at https://${HOST}:${PORT}`);
});