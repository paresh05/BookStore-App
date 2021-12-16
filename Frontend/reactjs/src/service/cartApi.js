import axiosPost from "../helper/axios";

const addToCart = (data) => {
  let reqObj = {
    data: data,
    url: "http://localhost:4001/cart",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  return axiosPost
    .apiPost(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const deleteFromCart = (data) => {
  let reqObj = {
    data: data,
    url: "http://localhost:4001/cart/" + data._id,
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  return axiosPost
    .apiDelete(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const getCart = () => {
  let reqObj = {
    url: "http://localhost:4001/cart",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  return axiosPost
    .apiGet(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const updateCart = (data) => {
  let reqObj = {
    data: data,
    url: "http://localhost:4001/cart/" + data.cartId,
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  return axiosPost
    .apiUpdate(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const getCustomer = () => {
  let reqObj = {
    url: "http://localhost:4001/customer",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  return axiosPost
    .apiGet(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const addCustomer = (data) => {
  let reqObj = {
    data: data,
    url: "http://localhost:4001/customer",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  return axiosPost
    .apiPost(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const updateCustomer = (data) => {
  let reqObj = {
    data: data,
    url: "http://localhost:4001/customer/" + data._id,
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  return axiosPost
    .apiUpdate(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const addOrder = (data) => {
  let reqObj = {
    data: data,
    url: "http://localhost:4001/order",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  return axiosPost
    .apiPost(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const getOrder = () => {
  let reqObj = {
    url: "http://localhost:4001/order",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  return axiosPost
    .apiGet(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export default {
  addToCart,
  deleteFromCart,
  getCart,
  updateCart,
  getCustomer,
  addCustomer,
  updateCustomer,
  addOrder,
  getOrder,
};
