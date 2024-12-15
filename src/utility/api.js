import axios from "axios";


// Create an Axios instance with default configuration
const api = axios.create({
  baseURL:  import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to dynamically include the token from localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const setAuthToken = (token) => {
  if (token) {
    console.log("Setting Authorization token:", token);
    localStorage.setItem("token", token);
  } else {
    console.log("Removing Authorization token");
    localStorage.removeItem("token");
  }
};

// Add a response interceptor for error handling or token expiration
api.interceptors.response.use(
  (response) => response, // Pass through successful responses
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Token may be invalid or expired.");
    }
    return Promise.reject(error);
  }
);

export default api;
