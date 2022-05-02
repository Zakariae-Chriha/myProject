import "../styles/Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(setUser, setUserCookie) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    axios
      .post("http://localhost:5000/user/login", { username, password })
      .then((res) => {
        setUser(res.data[0]);
        setUserCookie(res.data[0]);
        setError("Logged in successfully");
        setTimeout(() => {
          navigate("/Profile/" + res.data[0]._id);
        }, 500);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };
  const handleRegisterClick = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    axios
      .post("http://localhost:8000/user/register", { username, password })
      .then((res) => {
        setUser(res.data);
        setUserCookie(res.data);
        setError("Registered successfully");
        setTimeout(() => {
          navigate("/Profil" + res.data._id);
        }, 500);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return (
    <div className="row">
      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="login-box">
            <div className="login-snip">
              {" "}
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked
              />
              <label for="tab-1" className="tab">
                Login
              </label>{" "}
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label for="tab-2" className="tab">
                Sign Up
              </label>
              <div className="login-space">
                <div className="login">
                  <div className="group">
                    {" "}
                    <label for="user" className="label">
                      Username
                    </label>{" "}
                    <input
                      id="user"
                      type="text"
                      className="input"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />{" "}
                  </div>
                  <div className="group">
                    {" "}
                    <label for="pass" className="label">
                      Password
                    </label>{" "}
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />{" "}
                  </div>
                  <div className="group">
                    {" "}
                    <input
                      id="check"
                      type="checkbox"
                      className="check"
                      checked
                    />{" "}
                    <label for="check">
                      <span className="icon"></span> Keep me Signed in
                    </label>{" "}
                  </div>
                  <div className="group">
                    {" "}
                    <input
                      type="submit"
                      className="button"
                      value="Sign In"
                      onClick={handleLoginClick}
                    />{" "}
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                    {" "}
                    <a href="#">Forgot Password?</a>{" "}
                  </div>
                </div>
                <div className="sign-up-form">
                  <div className="group">
                    {" "}
                    <label for="user" className="label">
                      Username
                    </label>{" "}
                    <input
                      id="user"
                      type="text"
                      className="input"
                      placeholder="Create your Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />{" "}
                  </div>
                  <div className="group">
                    {" "}
                    <label for="pass" className="label">
                      Password
                    </label>{" "}
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      placeholder="Create your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />{" "}
                  </div>

                  <div className="group">
                    {" "}
                    <input
                      type="submit"
                      className="button"
                      value="Sign Up"
                      onClick={handleRegisterClick}
                    />{" "}
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                    {" "}
                    <label for="tab-1">Already Member?</label>{" "}
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
