/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : customer routes for user url end points
 * @file            : order.routes.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

module.exports = (app) => {
    const order = require("../controllers/order.controller.js");
    const {
      verifyToken
    } = require("../middleware/cart.middleware.js");
  
    app.post("/order",verifyToken, order.create);
  
    app.get("/order",verifyToken, order.findAll);
    
  };
  