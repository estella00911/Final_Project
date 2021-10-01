const { verify,sign } = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get('Authorization');
    if (token) {
      token = token.slice(7)
      verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.json({
            success: 0,
            message: err.message
          })
        } else {
          next();
        }
      })
    } else {
      res.json({
        success: 0,
        message: 'Access denied, unauthorized user'
      })
    }
  },
  createToken: (data) => {
    // data.password = undefined;
    // sign({results: data})
    const jsontoken = sign({ email: data.email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
    return jsontoken
  }
}

