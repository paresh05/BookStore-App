import axiosGet from "../helper/axios";

const getBooks = (pageNo) => {
  let reqObj = {
    url: "http://localhost:4001/books?page="+pageNo,
    headers: {
      "Content-type": "application/json",
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