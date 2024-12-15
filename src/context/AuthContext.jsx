import { createContext, useState, useEffect } from "react";
import api, { setAuthToken } from "../utility/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");
    return savedToken || null;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      setAuthToken(token);
    }
  }, [token]);

  const register = async (data) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.post("/auth/register/", data);
      return response.data;
    } catch (err) {
      if (err.response?.data?.email || err.response?.data?.password) {
        setError(err.response?.data?.email || err.response?.data?.password);
      } else if (err.response?.data?.username[0]) {
        setError(err.response?.data?.username[0]);
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.post("/auth/login/", credentials);
      const { token, user } = response.data;

      // Save token and user to state and localStorage
      setUser(user);
      setToken(token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      setAuthToken(token);
    } catch (err) {
      setError(err.response?.data?.error || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      setError(null);

      const accessToken = localStorage.getItem("token");

      if (!accessToken) {
        throw new Error("No token found, user is not logged in.");
      }

      setAuthToken(accessToken);

      // Make the logout request
      const res = await api.get("/auth/logout/");

      // Clear localStorage and state upon successful logout
      setUser(null);
      setToken(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setAuthToken(null); // Remove the token from the API instance

      return res;
    } catch (err) {
      setError(err.response?.data?.message || "Error logging out");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        register,
        login,
        logout,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
