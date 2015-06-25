var express = require('express');
var router = express.Router();

var testMessagesGet = require('./../test/messages-get.json');


//endpoints del api
router.get('/messages', function (req, res) {  
  res.json(testMessagesGet);
});

router.post('/messages', function (req, res) {
  
  var msg = req.body;
      msg.timestamp = new Date().toISOString();
  
  //save msg
  res.status(202);
  res.send();
});


//exports
module.exports = router;