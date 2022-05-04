import "../styles/Login.css";
import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [userInput, setUserInput] = useState({ name: "", password: "" });
  const { login, loggedIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login(userInput);
  };

  if (loggedIn) return <Navigate to="/profile" />;
  return (
    <div className="row">
      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="login-box">
            <div className="login-snip">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked
                readOnly
              />
              <label className="tab">Login</label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label htmlFor="tab-2" className="tab">
                Sign Up
              </label>
              <div className="login-space">
                <div className="login">
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Username
                    </label>
                    <input
                      id="user"
                      type="text"
                      className="input"
                      placeholder="Enter your username"
                      onChange={(e) =>
                        setUserInput({
                          name: e.target.value,
                          password: userInput.password,
                        })
                      }
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Enter your password"
                      onChange={(e) =>
                        setUserInput({
                          name: e.target.value,
                          password: userInput.password,
                        })
                      }
                    />
                  </div>
                  <div className="group">
                    <input
                      id="check"
                      type="checkbox"
                      className="check"
                      checked
                    />
                    <label htmlFor="check">
                      <span className="icon"></span> Keep me Signed in
                    </label>
                  </div>
                  <div className="group">
                    <input
                      type="submit"
                      className="button"
                      value="Sign In"
                      onClick={handleLogin}
                    />
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                    <a href="/">Forgot Password?</a>
                  </div>
                </div>
                <div className="sign-up-form">
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Username
                    </label>
                    <input
                      id="user"
                      type="text"
                      className="input"
                      placeholder="Create your Username"
                      onChange={(e) =>
                        setUserInput({
                          name: e.target.value,
                          password: userInput.password,
                        })
                      }
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Create your password"
                      onChange={(e) =>
                        setUserInput({
                          name: e.target.value,
                          password: userInput.password,
                        })
                      }
                    />
                  </div>

                  <div className="group">
                    <input
                      type="submit"
                      className="button"
                      value="Sign Up"
                      onClick={handleLogin}
                    />
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                    <label htmlFor="tab-1">Already Member?</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
