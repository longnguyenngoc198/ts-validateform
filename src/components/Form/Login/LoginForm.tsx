import React from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

import "../style.css";

const LoginForm = () => {
  return (
    <div className="App-header">
      <Link to="/">
        <div className="back">
          <TiArrowBackOutline />
        </div>
      </Link>
      <form action="" method="POST" className="form" id="form-1">
        <h2>Login</h2>
        <div className="spacer"></div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="VD: email@domain.com"
            className="form-control"
          />
          <span className="form-message"></span>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Mật khẩu
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Nhập mật khẩu"
            className="form-control"
          />
          <span className="form-message"></span>
        </div>

        <button className="form-submit">Đăng Nhập</button>
      </form>
    </div>
  );
};

export default LoginForm;
