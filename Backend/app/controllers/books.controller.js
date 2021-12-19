/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : Handles request and response for CRUD operations of user
 * @file            : user.controller.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

const { findAllBook, findSearchedBook } = require("../service/books.service.js");
const logger = require("../../logger");
/**
 * @description handles request and response for finding all the books
 * @param {Object} req
 * @param {Object} res
 */
exports.findAll = (req, res) => {
  findAllBook(req.query.page,req.query.sort,(err, books) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books.",
      });
      logger.error("Some error occurred while retrieving books.");
    }
    res.send(books);
    logger.info("Successfully returned all the books. ");
  });
};

/**
 * @description handles request and response for finding the searched book
 * @param {Object} req
 * @param {Object} res
 */
 exports.findBooks = (req, res) => {
  findSearchedBook(req.body.search,(err, user) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving book.",
      });
      logger.error("Some error occurred while retrieving book.");
    }
    res.send(user);
    logger.info("Successfully returned the searched books.");
  });
};
