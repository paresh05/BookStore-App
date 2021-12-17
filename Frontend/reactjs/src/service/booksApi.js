import axiosGet from "../helper/axios";

const getBooks = (pageNo, sort) => {
  let reqObj = {
    url: `http://localhost:4001/books?page=${pageNo}&sort=${sort}`,
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  return axiosGet
    .apiGet(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const searchBook = (data) => {
  let reqObj = {
    data: data,
    url: "http://localhost:4001/books/search",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  return axiosGet
    .apiPost(reqObj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export default { getBooks, searchBook };
