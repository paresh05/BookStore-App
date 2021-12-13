/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : cart routes for user url end points
 * @file            : cart.routes.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

module.exports = (app) => {
  const cart = require("../controllers/cart.controller.js");
  const {
    verifyToken
  } = require("../middleware/cart.middleware.js");

  app.post("/cart",verifyToken, cart.create);

  app.get("/cart",verifyToken, cart.findAll);

  app.put("/cart/:cartId", verifyToken, cart.update);

  app.delete("/cart/:cartId",verifyToken, cart.delete);
};
