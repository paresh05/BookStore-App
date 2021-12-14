/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : Handles request and response for CRUD operations of cart
 * @file            : customer.controller.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

const {
  createNewCustomer,
  findAllCustomer,
  updateCustomer,
} = require("../service/customer.service.js");
const logger = require("../../logger");

/**
 * @description handles request and response for creating a new customer
 * @param {Object} req
 * @param {Object} res
 */
exports.create = (req, res) => {
  createNewCustomer(
    req.body.userId,
    req.body.name,
    req.body.phoneNumber,
    req.body.pinCode,
    req.body.locality,
    req.body.address,
    req.body.city,
    req.body.landmark,
    req.body.type,
    (err, dataCart) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the customer.",
        });
        logger.error("Some error occurred while creating the customer.");
      }
      res.send(dataCart);
      logger.info("Successfully created the customer");
    }
  );
};
/**
 * @description handles request and response for finding all the customer
 * @param {Object} req
 * @param {Object} res
 */
exports.findAll = (req, res) => {
  findAllCustomer(req.body.userId,(err, customer) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customer.",
      });
      logger.error("Some error occurred while retrieving customer.");
    }
    res.send(customer);
    logger.info("Successfully returned all the customer.");
  });
};

/**
 * @description handles request and response for updating a customer
 * @param {Object} req
 * @param {Object} res
 */
exports.update = (req, res) => {
  let id = req.params.customerId;
  let name = req.body.name;
  let phoneNumber = req.body.phoneNumber;
  let pinCode = req.body.pinCode;
  let locality = req.body.locality;
  let address = req.body.address;
  let city = req.body.city;
  let landmark = req.body.landmark;
  let type = req.body.type;
  updateCustomer(
    id,
    name,
    phoneNumber,
    pinCode,
    locality,
    address,
    city,
    landmark,
    type,
    (err, customer) => {
      if (err) {
        if (err.kind === "ObjectId") {
          logger.error("customer not found ");
          return res.status(404).send({
            message: "customer not found with id " + req.params.cartId,
          });
        }
        logger.error("Error retrieving Cart");
        return res.status(500).send({
          message: "Error updating customer with id " + req.params.cartId,
        });
      }
      if (!customer) {
        logger.error("customer not found");
        return res.status(404).send({
          message: "customer not found with id " + req.params.cartId,
        });
      }
      res.send(customer);
      logger.info("Successfully updated the customer");
    }
  );
};
