// client/src/api/axiosInstance.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config;

    if (err.response.status === 401 && !original._retry) {
      original._retry = true;

      const res = await axios.post(
        "http://localhost:5000/api/auth/refresh",
        {
          refreshToken: localStorage.getItem("refreshToken"),
        }
      );

      localStorage.setItem("token", res.data.accessToken);
      original.headers.Authorization = `Bearer ${res.data.accessToken}`;

      return api(original);
    }

    return Promise.reject(err);
  }
);

export default api;
