const jwt = require("jsonwebtoken");
const JWTSECRETKEY = "12892198ABHI";
const authValidator = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
      try {
        const decoded = jwt.verify(token, JWTSECRETKEY);
        req.user = decoded;
        next();
      } catch (error) {
         res.send({error:"Invalid token"})
      }
    }
    else {
        res.send({error:"Please Signup"});
    }
  };
 


  module.exports = {authValidator};