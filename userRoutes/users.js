const express = require('express');

const router = express.Router();

router.get('/users', function (req, res) {
  res.send('Get Users');
});
