import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-backend-wqmt.onrender.com/api",
});

export default API;