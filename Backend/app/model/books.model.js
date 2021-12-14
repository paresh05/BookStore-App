/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : Creation of user collection and CRUD operations of user
 * @file            : user.model.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 **************************************************************************/

const mongoose = require("mongoose");
/**
 * @description Creates a books collection
 */
const BookSchema = mongoose.Schema(
  {
    author: String,
    title: String,
    image: String,
    price: Number,
    description: String,
  }
);

const Book = mongoose.model("Book", BookSchema);

/**
 * @description This function is used to retrieve all the users
 * @param {callback} callback
 */
const findBook = (callback) => {
  Book.find((err, book) => {
    return err ? callback(err, null) : callback(null, book);
  });
};
module.exports = { Book, findBook };
