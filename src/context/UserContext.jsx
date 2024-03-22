import { jwtDecode } from "jwt-decode";
import { createContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const register = async (email, password) => {
    try {
      setLoading(true);

      const response = await fetch(`${URL}/user/register`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      // handle API related errors
      const register = await response.json();
      if (register.error) {
        throw new Error(register.message);
      }

      setError("");
      navigate(`/auth/login?message=${register.message}`);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);

      const response = await fetch(`${URL}/user/login`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      // handle API related errors
      const login = await response.json();

      if (login.error) {
        throw new Error(login.message);
      }

      // persist token
      setAccessToken(login.token);
      setError("");

      localStorage.setItem("accessToken", login.token);

      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getAccessToken = async () => {
    if (accessToken) {
      const now = new Date();

      const accessTokenExpiryDate = new Date(jwtDecode(accessToken).exp * 1000);
      const isAccessTokenExpired = accessTokenExpiryDate < now;

      if (isAccessTokenExpired) {
        navigate(
          "/login?message=Your login session has expired. Please login again."
        );
      }

      return accessToken;
    } else {
      return null;
    }
  };

  const logout = async () => {
    try {
      setLoading(true);

      setAccessToken(null);
      setError("");

      localStorage.removeItem("accessToken");

      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const value = useMemo(
    () => ({
      isAuthenticated: !!accessToken,
      getAccessToken,
      loading,
      error,
      setError,
      register,
      login,
      logout,
      email: accessToken ? jwtDecode(accessToken).email : null,
    }),
    [accessToken, error]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
