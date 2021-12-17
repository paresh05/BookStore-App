/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : user routes for user url end points
 * @file            : user.routes.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

module.exports = (app) => {
    const books = require("../controllers/books.controller.js");
    const {
      verifyToken
    } = require("../middleware/cart.middleware.js");

    app.get("/books",verifyToken ,books.findAll);

    app.post("/books/search",verifyToken ,books.findBooks);
  
  };
  