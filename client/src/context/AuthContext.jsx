import React, { createContext, useState, useContext, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
} from "../api/auth.js";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const register = async (user) => {
    try {
      const res = await registerRequest(user);
      setIsAuth(true);
      setUser(res.data);
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data);
      }
    }
  };

  const login = async (user) => {
    try {
      const res = await loginRequest(user);
      setIsAuth(true);
      setUser(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuth(false);
    setUser(null);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuth(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
          setIsAuth(false);
          setLoading(false);
          return;
        }

        setIsAuth(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuth(false);
        setLoading(false);
        setUser(null);
      }
      checkLogin();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ register, login, logout, loading, user, isAuth, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
