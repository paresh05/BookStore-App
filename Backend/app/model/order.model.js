const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    customerId: String,
    items: [
      {
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
        name: String,
        author: String,
        numOfItems: Number,
        price: Number,
        image: String,
      },
    ],
    totalPrice: Number,
    status: String,
    orderdOn: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

/**
 * @description This function creates a new order
 * @param {string} title
 * @param {string} content
 * @param {ObjectId} userId
 * @returns result or err
 */
const createOrder = (customerId, items, totalPrice, status, userId) => {
  const order = new Order({
    customerId: customerId,
    items: items,
    totalPrice: totalPrice,
    status: status,
    userId: userId,
  });
  return order
    .save()
    .then((result) => {
      return result;
    })
    .catch((err) => {
      throw err;
    });
};
/**
 * @description This function is used to get all the order
 * @param {ObjectId} userId
 * @returns
 */
const findOrder = (userId) => {
  return Order.find({ userId: userId })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = { Order, createOrder, findOrder };
