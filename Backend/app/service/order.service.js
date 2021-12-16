/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : get the values from the controller and sends it to model and vice versa 
 * @file            : order.service.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/
const {
    createOrder,
    findOrder,
  } = require("../model/order.model");
  /**
   * @description creates a new note using the function createOrder
   * @param {string} title
   * @param {string} content
   * @param {ObjectId} userId
   * @returns err or order
   */
  const createNewOrder = (customerId, items, totalPrice, status, userId) => {
    return createOrder(customerId, items, totalPrice, status, userId)
      .then((order) => {
        return order;
      })
      .catch((err) => {
        throw err;
      });
  };
  /**
   * @description retrieves all the notes using findOrder function
   * @param {ObjectId} userId
   * @returns err or result
   */
  const findAllOrders = (userId) => {
    return findOrder(userId)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw err;
      });
  };
  
  module.exports = {
    createNewOrder,
    findAllOrders,
  };