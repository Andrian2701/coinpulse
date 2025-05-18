import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": process.env.API_KEY,
  },
});
