const express = require('express');
const app = express();
const messageRoute = require('./routes/message');


const port = 5001;

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to the basic CI/CD application'
  });
})

app.use('/message', messageRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});