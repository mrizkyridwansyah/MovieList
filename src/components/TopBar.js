import React from "react";
import { useHistory } from "react-router-dom";

export default function TopBar({ isLogin }) {
  const history = useHistory();
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-2 shadow">
      <div className="container">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">
          Home Theater
        </a>
        {isLogin ? (
          <>
            <button
              className="navbar-toggler position-absolute d-md-none collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap dropdown">
                <a
                  className="nav-link"
                  onClick={() => {
                    localStorage.removeItem("isLogin");
                    history.push("/login");
                  }}
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Logout
                </a>
              </li>
            </ul>
          </>
        ) : (
          <>
            <button
              className="navbar-toggler position-absolute d-md-none collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap dropdown">
                <a
                  className="nav-link"
                  href="/login"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Login
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
}
