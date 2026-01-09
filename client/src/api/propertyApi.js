import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const searchProperties = (filters, page = 1) => {
  const params = new URLSearchParams({ ...filters, page }).toString();
  return API.get(`/properties/search?${params}`);
};
