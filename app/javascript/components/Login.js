import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formFilledOut, setFormFilledOut] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
    if (username && password) {
      setFormFilledOut(true);
    } else {
      setFormFilledOut(false);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {localStorage.getItem("username")}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="submit" disabled={!formFilledOut}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;

