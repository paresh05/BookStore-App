/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : Creation of user collection and CRUD operations of cart
 * @file            : cart.model.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 **************************************************************************/

const mongoose = require("mongoose");
/**
 * @description Creates a cart collection
 */
const CartSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  author:String,
  image:String,
  title:String,
  price: String,
  numOfItems: Number,
});

const Cart = mongoose.model("Cart", CartSchema);

/**
 * @description This function is used to create a new cart
 * @param {callback} callback
 * @returns err or cart
 */
const createCart = ({userId, bookId, price, title, image, author}, callback) => {
  const cart = new Cart({
    userId: userId,
    bookId: bookId,
    price: price,
    title: title,
    image: image,
    author: author,
    numOfItems: 1,
  });
  return cart.save((err, cart) => {
    return err ? callback(err, null) : callback(null, cart);
  });
};

/**
 * @description This function is used to retrieve all the cart
 * @param {callback} callback
 */
const findCart = (callback) => {
  Cart.find((err, cart) => {
    return err ? callback(err, null) : callback(null, cart);
  });
};

/**
  * @description This function updates a cart of the id passed
  * @param {string} findCartId 
  * @param {string} numOfItems 
  * @param {string} callback 
  * @returns err or data
  */
 const findCartAndUpdate = (
  findCartId,
  numOfItems,
  callback
) => {
  return Cart.findByIdAndUpdate(
    findCartId,
    {
      numOfItems: numOfItems,
    },
    { new: true },
    (err, data) => {
      return err ? callback(err, null) : callback(null, data);
    }
  );
};

/**
 * @description This function is used to delete a cart of the id passed
 * @param {_id} findCartId
 * @param {callback} callback
 */
const deleteCart = (findCartId, callback) => {
  Cart.findByIdAndRemove(findCartId, (err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};
module.exports = { Cart, createCart, findCart, deleteCart, findCartAndUpdate};
