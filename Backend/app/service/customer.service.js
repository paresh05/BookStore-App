/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : get the values from the controller and sends it to model and vice versa
 * @file            : customer.service.js
 * @author          : Paresh Praveen
 * @version         : 1.0
 * @since           : 7-Oct-2021
 *
 **************************************************************************/

const {
  createCustomer,
  findCustomer,
  findCustomerAndUpdate,
} = require("../model/customer.model.js");

/**
 * @description creates a new customer using create customer function
 * @param {callback} callback
 * @returns customer or err
 */
const createNewCustomer = (
  userId,
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
  let customer = createCustomer(
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
    (err, data) => {
      return err ? callback(err, null) : callback(null, data);
    }
  );
  return customer;
};
/**
 * @description finds all the customer using findCustomer function
 * @param {callback} callback
 */
const findAllCustomer = (userId,callback) => {
  findCustomer(userId,(err, data) => {
    return err ? callback(err, null) : callback(null, data);
  });
};

/**
 * @description updates the Customer of the id using updateCustomer function
 * @param {_id} findCustomerId
 * @param {string} numberOfItems
 * @param {callback} callback
 */
const updateCustomer = (
  findCustomerId,
  userId,
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
  findCustomerAndUpdate(
    findCustomerId,
    userId,
    name,
    phoneNumber,
    pinCode,
    locality,
    address,
    city,
    landmark,
    type,
    (err, data) => {
      return err ? callback(err, null) : callback(null, data);
    }
  );
};

module.exports = {
  createNewCustomer,
  findAllCustomer,
  updateCustomer,
};
