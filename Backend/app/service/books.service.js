/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : get the values from the controller and sends it to model and vice versa
 * @file            : user.service.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/
const { findBook } = require("../model/books.model.js");

/**
 * @description finds all the users using findUser function
 * @param {callback} callback
 */
const findAllBook = (pageNo, sort, callback) => {
  const page = pageNo;
  let limit = 12;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  findBook((err, data) => {
    if (sort == "Low") {
      data.sort((a, b) => a.price - b.price);
    } else if (sort == "High") {
      data.sort((a, b) => b.price - a.price);
    }
    const count = data.length;
    const paginatedData = data.slice(startIndex, endIndex);
    return err ? callback(err, null) : callback(null, {books:paginatedData, count: count});
  });
};

const findSearchedBook = (search, callback) => {
  findBook((err, data) => {
    let filteredBook = data.filter((book) => {
      return (
        book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search)
      );
    });
    return err ? callback(err, null) : callback(null, filteredBook);
  });
};

module.exports = {
  findAllBook,
  findSearchedBook,
};
