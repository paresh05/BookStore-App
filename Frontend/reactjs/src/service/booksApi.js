import axiosGet from "../helper/axios";

const getBooks = (pageNo) => {
  let reqObj = {
    url: "http://localhost:4001/books?page="+pageNo,
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

export default { getBooks };