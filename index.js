const express = require('express');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();
const app = express();
const messageRoute = require('./routes/message');


// eslint-disable-next-line no-undef
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to the basic CI/CD application'
  });
})

app.use('/message', messageRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});