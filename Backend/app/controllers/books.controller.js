/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : Handles request and response for CRUD operations of user
 * @file            : user.controller.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

const { findAllBook, findBookById } = require("../service/books.service.js");
const logger = require("../../logger");
/**
 * @description handles request and response for finding all the books
 * @param {Object} req
 * @param {Object} res
 */
exports.findAll = (req, res) => {
  findAllBook((err, user) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books.",
      });
      logger.error("Some error occurred while retrieving books.");
    }
    res.send(user);
    logger.info("Successfully returned all the books. ");
  });
};
/**
 * @description handles request and response for finding a book using id
 * @param {Object} req
 * @param {Object} res
 */
exports.findOne = (req, res) => {
  findBookById(req.params.bookId, (err, book) => {
    if (err) {
      if (err.kind === "ObjectId") {
        logger.error("book not found");
        return res.status(404).send({
          message: "Book not found with id " + req.params.bookId,
        });
      }
      logger.error("Error retrieving book");
      return res.status(500).send({
        message: "Error retrieving book with id " + req.params.bookId,
      });
    }
    if (!book) {
      logger.error("Book not found");
      return res.status(404).send({
        message: "Book not found with id " + req.params.bookId,
      });
    }
    res.send(book);
    logger.info("Successfully found the Book ");
  });
};
