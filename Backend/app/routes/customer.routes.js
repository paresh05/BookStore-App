/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : customer routes for user url end points
 * @file            : customer.routes.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

module.exports = (app) => {
    const customer = require("../controllers/customer.controller.js");
    const {
      verifyToken
    } = require("../middleware/cart.middleware.js");
  
    app.post("/customer",verifyToken, customer.create);
  
    app.get("/customer",verifyToken, customer.findAll);
  
    app.put("/customer/:customerId", verifyToken, customer.update);
    
  };
  