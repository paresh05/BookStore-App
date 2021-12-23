import axiosPost from "../helper/axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const register = (data) => {
  let reqObj = {
    data: data,
    url: baseUrl+"/users",
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
  console.log(baseUrl);
  let reqObj = {
    data: data,
    url: baseUrl+"/users/login",
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
    url: baseUrl+"/users/login/forgotPassword",
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
    url: baseUrl+"/users/login/reset/" + token,
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
