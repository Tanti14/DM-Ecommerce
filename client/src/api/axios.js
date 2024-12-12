import axios from "axios";

const instance = axios.create({
  baseURL: "https://dm-ecommercedb.vercel.app/api",
  withCredentials: true,
});

export default instance;

/* baseURL: "http://localhost:3000/api", */
/* baseURL: "https://dm-ecommercedb.vercel.app/api" */
