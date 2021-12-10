/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : get the values from the controller and sends it to model and vice versa
 * @file            : cart.service.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

const { createCart, findCart, deleteCart } = require("../model/cart.model.js");

/**
 * @description creates a new cart using create cart function
 * @param {callback} callback
 * @returns cart or err
 */
const createNewCart = (userId, itemId, itemCost, numOfItems, callback) => {
  let cart = createCart({userId, itemId, itemCost, numOfItems }, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
  return cart;
};
/**
 * @description finds all the users using findCart function
 * @param {callback} callback
 */
const findAllCart = (callback) => {
  findCart((err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};

/**
 * @description deletes the cart using deleteUserById functon
 * @param {_id} findCartId
 * @param {callback} callback
 */
const deleteCartById = (findCartId, callback) => {
  deleteCart(findCartId, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};

module.exports = {
  createNewCart,
  findAllCart,
  deleteCartById,
};
