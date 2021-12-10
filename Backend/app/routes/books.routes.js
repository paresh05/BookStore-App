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
  
    app.get("/books", books.findAll);
  
    app.get("/books/:bookId", books.findOne);
  };
  