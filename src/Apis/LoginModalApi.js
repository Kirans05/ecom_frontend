import axios from "axios";

export const signupUser = (data) => {
  let options = {
    url: `http://localhost:5000/api/auth/signup`,
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data,
  };

  return axios(options);
};

export const loginUser = (data) => {
  let options = {
    url: `http://localhost:5000/api/auth/login`,
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data,
  };

  return axios(options);
};
