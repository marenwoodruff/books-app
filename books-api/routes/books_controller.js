const express = require('express');
const router = express.Router();

// index route
router.get('/', (req, res) => {
  res.send('this works');
})


module.exports = router;
