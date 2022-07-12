import React, { useEffect, useRef, useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";

import "../style.css";

interface User {
  fullname: string;
  email: string;
  password: string;
}
const RegisterForm: React.FC = () => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    fullname: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({
    nameMessage: "",
    emailMessage: "",
    passwordMessage: "",
  });

  const inputName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage({ ...message, nameMessage: "" });
    setUser({ ...user, fullname: e.target.value.trim() });
    inputName.current?.parentElement?.classList.remove("invalid");
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage({ ...message, emailMessage: "" });
    setUser({ ...user, email: e.target.value.trim() });
    inputEmail.current?.parentElement?.classList.remove("invalid");
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage({ ...message, passwordMessage: "" });
    setUser({ ...user, password: e.target.value.trim() });
    inputPassword.current?.parentElement?.classList.remove("invalid");
  };

  const validateAll = (): void => {
    const message = {
      nameMessage: "",
      emailMessage: "",
      passwordMessage: "",
    };

    if (isEmpty(user.fullname)) {
      message.nameMessage = "Please input your name";
      inputName.current?.parentElement?.classList.add("invalid");
    }
    if (isEmpty(user.email)) {
      message.emailMessage = "Please input your email";
      inputEmail.current?.parentElement?.classList.add("invalid");
    } else if (!isEmail(user.email)) {
      message.emailMessage = "Your email is incorrect";
      inputEmail.current?.parentElement?.classList.add("invalid");
    }

    if (isEmpty(user.password)) {
      message.passwordMessage = "Please input your password";
      inputPassword.current?.parentElement?.classList.add("invalid");
    } else if (!isStrongPassword(user.password)) {
      message.passwordMessage = "Password incorrect";
      inputPassword.current?.parentElement?.classList.add("invalid");
    }
    setMessage(message);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    validateAll();
    if (
      user.fullname &&
      isEmail(user.email) &&
      isStrongPassword(user.password)
    ) {
      setUsers([...users, user]);
      setIsValid(true);
    } else {
      console.log("somethings missing");
    }
    console.log(users);
  };

  return (
    <div className="App-header">
      <Link to="/">
        <div className="back">
          <TiArrowBackOutline />
        </div>
      </Link>
      {isValid ? (
        <div>
          <h3>Successfully</h3>
          <Link to="/login">
            <button type="submit" className="form-submit">
              Login Now
            </button>
          </Link>
        </div>
      ) : (
        <form className="form" id="form-1" onSubmit={(e) => onSubmit(e)}>
          <h2 className="heading">Register</h2>
          <div className="spacer"></div>
          {/* Name */}
          <div className={`form-group`}>
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <input
              ref={inputName}
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Enter your full name"
              className="form-control"
              onChange={onChangeName}
            />
            <span className="form-message">{message.nameMessage}</span>
          </div>
          {/* Email */}
          <div className={`form-group`}>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              ref={inputEmail}
              id="email"
              name="email"
              type="text"
              placeholder="Ex: email@domain.com"
              className="form-control"
              autoComplete="email"
              onChange={onChangeEmail}
            />
            <span className="form-message">{message.emailMessage}</span>
          </div>
          {/* Password */}
          <div className={`form-group`}>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              ref={inputPassword}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="form-control"
              autoComplete="current-password"
              onChange={onChangePassword}
            />
            <span className="form-message">{message.passwordMessage}</span>
          </div>

          {/* Submit */}
          <button type="submit" className="form-submit">
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
