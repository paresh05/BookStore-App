/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : Handles request and response for CRUD operations of note
 * @file            : order.controller.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

const {
    createNewOrder,
    findAllOrders,
  } = require("../service/order.service.js");
  const logger = require("../../logger");
  /**
   * @description Handles request and response for creating a new order
   * @param {Object} req
   * @param {Object} res
   */
  exports.create = (req, res) => {
    createNewOrder(req.body.customerId, req.body.items, req.body.totalPrice, req.body.status, req.body.userId)
      .then((data) => {
        res.send(data);
        logger.info("Successfully created the order");
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the order.",
        });
        logger.error("Some error occurred while creating the order.");
      });
  };
  /**
   * @description Handles request and response for finding all the notes
   * @param {Object} req
   * @param {Object} res
   */
  exports.findAll = (req, res) => {
    findAllOrders(req.body.userId)
      .then((data) => {
        res.send(data);
        logger.info("Successfully returned all the order. ");
      })
      .catch((err) => {
        res.status(500).send({
          message: "Invalid UserId",
        });
        logger.error("Invalid UserId");
      });
  };
 