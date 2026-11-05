import axios from "axios";

export const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: `${url}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
