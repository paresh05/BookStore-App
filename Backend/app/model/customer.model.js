/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : Creation of user collection and CRUD operations of cart
 * @file            : customer.model.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 **************************************************************************/

const mongoose = require("mongoose");
/**
 * @description Creates a customer collection
 */
const CustomerSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  phoneNumber: Number,
  pinCode: Number,
  locality: String,
  address: String,
  city: String,
  landmark: String,
  type: String,
});

const Customer = mongoose.model("Customer", CustomerSchema);

/**
 * @description This function is used to create a new Customer
 * @param {callback} callback
 * @returns err or Customer
 */
const createCustomer = (
  {
    userId,
    name,
    phoneNumber,
    pinCode,
    locality,
    address,
    city,
    landmark,
    type,
  },
  callback
) => {
  const customer = new Customer({
    userId: userId,
    name: name,
    phoneNumber: phoneNumber,
    pinCode: pinCode,
    locality: locality,
    address: address,
    city: city,
    landmark: landmark,
    type: type,
  });
  return customer.save((err, customer) => {
    return err ? callback(err, null) : callback(null, customer);
  });
};

/**
 * @description This function is used to retrieve all the Customer
 * @param {callback} callback
 */
const findCustomer = (userId,callback) => {
  Customer.find({userId:userId},(err, customer) => {
    return err ? callback(err, null) : callback(null, customer);
  });
};

/**
 * @description This function updates a user of the id passed
 * @param {string} findUserId
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} email
 * @param {string} callback
 * @returns err or data
 */
const findCustomerAndUpdate = (
  findUserId,
  name,
  phoneNumber,
  pinCode,
  locality,
  address,
  city,
  landmark,
  type,
  callback
) => {
  return Customer.findByIdAndUpdate(
    findUserId,
    {
      name: name,
      phoneNumber: phoneNumber,
      pinCode: pinCode,
      locality: locality,
      address: address,
      city: city,
      landmark: landmark,
      type: type,
    },
    { new: true },
    (err, data) => {
      return err ? callback(err, null) : callback(null, data);
    }
  );
};

module.exports = {
  Customer,
  createCustomer,
  findCustomer,
  findCustomerAndUpdate,
};
