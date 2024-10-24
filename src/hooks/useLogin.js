import { useState } from "react";
import axios from "axios";
import { useAuth } from "./useAuth";

const proxy = process.env.REACT_APP_API_SERVER;

function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUser } = useAuth();

  const login = (email = "", password = "") => {
    email = email.toLowerCase();
    setLoading(true);
    axios
      .post(proxy + "/api/user/login", { email, password })
      .then((res) => {
        console.log("Token :", res.data);
        localStorage.setItem("userToken", res.data.token);
        setUser(res.data.token);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error :", error.response);
        setError(error.response.data);
        setLoading(false);
      });
  };

  return { login, loading, error };
}

export { useLogin };
