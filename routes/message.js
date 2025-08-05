const router = require('express').Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    message: 'Welcome to the message route of the basic CI/CD application'
  });
});

module.exports = router;