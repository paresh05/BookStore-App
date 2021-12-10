import axiosPost from "../helper/axios";

const register = (data) => {
  let reqObj = {
    data: data,
    url: "http://localhost:4001/users",
    headers: {
      "Content-type": "application/json",
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

const login = (data) => {
  let reqObj = {
    data: data,
    url: "http://localhost:4001/users/login",
    headers: {
      "Content-type": "application/json",
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

const forgotPassword = (data) => {
  let reqObj = {
    data: data,
    url: "http://localhost:4001/users/login/forgotPassword",
    headers: {
      "Content-type": "application/json",
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

const resetPassword = (data, token) => {
  let reqObj = {
    data: data,
    url: "http://localhost:4001/users/login/reset/" + token,
    headers: {
      "Content-type": "application/json",
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

export default { register, login, forgotPassword, resetPassword };
