import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "fd9de0b1e991460c9c45169d797ae783",
  },
});

export default instance;
