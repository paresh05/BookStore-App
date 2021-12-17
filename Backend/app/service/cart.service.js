/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : get the values from the controller and sends it to model and vice versa
 * @file            : cart.service.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

const { createCart, findCart, deleteCart, findCartAndUpdate, deleteAll} = require("../model/cart.model.js");

/**
 * @description creates a new cart using create cart function
 * @param {callback} callback
 * @returns cart or err
 */
const createNewCart = (userId, bookId, price, title, image, author, callback) => {
  let cart = createCart({userId, bookId, price, title, image, author}, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
  return cart;
};
/**
 * @description finds all the users using findCart function
 * @param {callback} callback
 */
const findAllCart = (userId,callback) => {
  findCart(userId,(err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};

/**
 * @description updates the user of the id using updateCart function
 * @param {_id} findCartId
 * @param {string} numberOfItems
 * @param {callback} callback
 */
 const updateCart = (
  findCartId,
  numOfItems,
  callback
) => {
  findCartAndUpdate(
    findCartId,
    numOfItems,
    (err, data) => {
      return err ? callback(err, null) : callback(null, data);
    }
  );
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

/**
 * @description deletes the cart using deleteCart functon
 * @param {_id} findCartId
 * @param {callback} callback
 */
 const deleteAllCartItems = (userId, callback) => {
  deleteAll(userId, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};

module.exports = {
  createNewCart,
  findAllCart,
  updateCart,
  deleteCartById,
  deleteAllCartItems,
};
