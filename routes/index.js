var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  /**/
  console.log("이야 요청이 왔다~");
  console.log("응답을 해주자~");
  res.render('index', {
    title: 'Gugu BbangdaengYEE',
    time: new Date().toISOString(),
    ip: req.ip
  }); //응답코드

});

module.exports = router;
