/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : get the values from the controller and sends it to model and vice versa
 * @file            : user.service.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/
const { findBook, findBookId } = require("../model/books.model.js");

/**
 * @description finds all the users using findUser function
 * @param {callback} callback
 */
const findAllBook = (pageNo, callback) => {
  const page = pageNo;
  let limit = 12;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  findBook((err, data) => {
    const paginatedData = data.slice(startIndex, endIndex);
    return err ? callback(err, null) : callback(null, paginatedData);
  });
};
/**
 * @description finds a user with id passed using findUsersId function
 * @param {_id} findUserId
 * @param {callback} callback
 */
const findBookById = (findBooksId, callback) => {
  findBookId(findBooksId, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};
module.exports = {
  findAllBook,
  findBookById,
};
