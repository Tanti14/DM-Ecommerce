import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = process.env.BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL || "http://localhost:3000/api",
  withCredentials: true,
});

export default instance;
