const express = require('express');
const cors = require('cors');
const { server } = require("../configs");
const apiRouter = require('../routes');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// API routes
app.use('/api/v1/', apiRouter);

// Start the server
exports.start = () => {
  const { port } = server;
  app.listen(port, (err) => {
    if (err) {
      console.error(`Error starting the server: ${err}`);
      process.exit(-1);
    }
    console.log(`Server is running on http://localhost:${port}/api/v1`);
  });
};
