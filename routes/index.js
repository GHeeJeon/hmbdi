const express = require('express');
const router = express.Router();
const wordStorage = require('../storage/WordStorage');

/* GET home page. */
router.get('/', function(req, res) {
  console.log("이야 요청이 왔다~");
  console.log("응답을 해주자~");

  res.render('index', {
    words: wordStorage.getWords(),
    title: '단어시험',
    time: new Date().toISOString(),
    ip: req.ip
  }); //응답코드

});

module.exports = router;
