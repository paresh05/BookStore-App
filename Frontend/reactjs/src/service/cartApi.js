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
    url: "http://localhost:4001/cart/"+data.cartId,
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

export default { addToCart, getCart, updateCart};
