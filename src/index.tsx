import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "./store/store";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import RegisterForm from "./components/Form/Register/RegisterForm";
import LoginForm from "./components/Form/Login/LoginForm";
import { Counter } from "./components/Screen/Screen";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/screen" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
