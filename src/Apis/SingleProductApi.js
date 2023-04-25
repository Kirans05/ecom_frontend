import axios from "axios";

export const fetchCategoryProducts = (name) => {
  let options = {
    url: `http://localhost:5000/api/product/getSubCategory/${name}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  return axios(options);
};
