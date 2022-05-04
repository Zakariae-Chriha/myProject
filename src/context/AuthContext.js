import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

function AuthState({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = async (user) => {
    try {
      const res = await axios.post("http://localhost:8000/user/login", user);
      localStorage.setItem("token", res.data.token);

      const userInfo = await axios.get("http://localhost:8000/users", {
        headers: {
          Authorization: `${res.data.token}`,
        },
      });

      setLoggedIn(true);
      setUser(userInfo.data);
    } catch (err) {
      console.log(err);
    }
  };
  const signup = async (user) => {
    try {
      const res = await axios.post("http://localhost:8000/user/register", user);
      localStorage.setItem("token", res.data.token);
      const userInfo = await axios.get("http://localhost:8000/users", {
        headers: {
          Authorization: `${res.data.token}`,
        },
      });
      localStorage.setItem("token", res.data.token);
      setLoggedIn(true);
      setUser(userInfo.data);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ logout, loggedIn, user, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthState;
