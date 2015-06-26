/* modulo de autorización del api */

var authorize = function (req, res, next) {
  var token = req.header("Authorization") ? req.header("Authorization") : req.param("Authorization");
  
  if (token == "pass")
     next();
  else 
    res.status(401).json({ code: 401, message: "Unauthorized", info: "You must include Authorization" });
};

//exports
module.exports = authorize;