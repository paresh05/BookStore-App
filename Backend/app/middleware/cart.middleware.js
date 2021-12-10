/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : Handles the token verification of cart
 * @file            : cart.middleware.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

/**
 * @requires logger
 * @requires jwt
 */
const logger = require("../../logger");
const jwtUtil = require("../../utility/jwt");

/**
 * @description This function is used to verify the jwt token
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization || req.headers.access_token;
  if (!bearerHeader) {
    res.send("Token is empty");
  }
  const token = bearerHeader;
  jwtUtil.tokenVerification(token, (err, data) => {
    if (err) {
      res.send(err);
    }
    req.body.userId = data.userId;
    next();
  });
};
module.exports = { verifyToken };
