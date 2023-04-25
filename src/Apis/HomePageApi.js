import axios from "axios";

export const fetchAllProducts = async () => {
  let options = {
    url: "http://localhost:5000/api/sub_categories/",
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };
  return axios(options);
};
