const express = require('express');
const router = express.Router();
const Book = require('../models').book;

// index route
router.get('/', (req, res) => {
  Book.findAll()
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      res.send(err)
    })
})


module.exports = router;
