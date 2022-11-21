var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/next',function(req,res,next){
  res.render('screen2');
});

router.get('/next1',function(req,res,next){
  res.render('screen3');
});

router.get('/chat',function(req,res,next){
  res.render('chat');
});

module.exports = router;
