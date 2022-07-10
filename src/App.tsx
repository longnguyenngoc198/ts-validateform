import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/register">
          <button className="btn btn-register">Register</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-register">Login</button>
        </Link>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
