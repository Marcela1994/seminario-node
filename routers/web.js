var express   = require('express');
var actions   = require('./../controllers/web-actions');
var router    = express.Router();


//endpoints del api
router.get  ('/messages',  actions.getAllMessages);

//exports
module.exports = router;