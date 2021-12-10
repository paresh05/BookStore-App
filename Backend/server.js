/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : set up the server and connects to the database
 * @file            : server.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

const dbConfig = require("./config/dbConnect");
const logger = require("./logger");
const express = require("express");
const cors = require("cors");
require("dotenv");
const app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

require("./app/routes/user.routes.js")(app);
require("./app/routes/books.routes.js")(app);
require("./app/routes/cart.routes.js")(app);
// listen for requests
module.exports = app.listen(process.env.PORT, () => {
  console.log("Server is listening on port " + process.env.PORT);
  logger.info("Server is listening on port " + process.env.PORT);
  dbConfig();
});
