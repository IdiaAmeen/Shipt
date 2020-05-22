import axios from "axios";

const getToken = () => {
  const token = localStorage.getItem(`token`);
  return token;
};

let apiUrl;

const apiUrls = {
  production: "https://shiptserver.herokuapp.com/api/",
  development: "https://localhost:3001",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});
api.interceptors.request.use(
  async function (options) {
    options.headers["Authorization"] = `Bearer ${getToken()}`;
    return options;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;
